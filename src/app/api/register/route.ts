import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { appendToGoogleSheet } from '@/lib/googleSheets';
import { sendRegistrationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { teamName, membersCount, leader, member1, member2, member3 } = body;

    // Validation
    if (!teamName || !leader) {
      return NextResponse.json(
        { error: 'Team name and leader information are required' },
        { status: 400 }
      );
    }

    // Validate student number format
    const studentNoRegex = /^[A-Z]{2}\/(2022|2023)\/\d{3}$/i;
    if (!studentNoRegex.test(leader.studentNo)) {
      return NextResponse.json(
        { error: 'Invalid student number format for leader' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(leader.email)) {
      return NextResponse.json(
        { error: 'Invalid email format for leader' },
        { status: 400 }
      );
    }

    // Validate contact number
    const contactRegex = /^\d{10}$/;
    if (!contactRegex.test(leader.contactNo.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid contact number format for leader' },
        { status: 400 }
      );
    }

    // Check if team name already exists
    const existingTeam = await prisma.team.findUnique({
      where: { teamName },
    });

    if (existingTeam) {
      return NextResponse.json(
        { error: 'Team name already exists. Please choose a different name.' },
        { status: 409 }
      );
    }

    // Build members array based on membersCount
    const members = [];
    const memberCount = parseInt(membersCount);

    if (memberCount >= 3 && member1) {
      // Validate member1
      if (!studentNoRegex.test(member1.studentNo)) {
        return NextResponse.json(
          { error: 'Invalid student number format for member 1' },
          { status: 400 }
        );
      }
      if (!emailRegex.test(member1.email)) {
        return NextResponse.json(
          { error: 'Invalid email format for member 1' },
          { status: 400 }
        );
      }
      if (!contactRegex.test(member1.contactNo.replace(/\s/g, ''))) {
        return NextResponse.json(
          { error: 'Invalid contact number format for member 1' },
          { status: 400 }
        );
      }
      members.push(member1);
    }

    if (memberCount >= 3 && member2) {
      // Validate member2
      if (!studentNoRegex.test(member2.studentNo)) {
        return NextResponse.json(
          { error: 'Invalid student number format for member 2' },
          { status: 400 }
        );
      }
      if (!emailRegex.test(member2.email)) {
        return NextResponse.json(
          { error: 'Invalid email format for member 2' },
          { status: 400 }
        );
      }
      if (!contactRegex.test(member2.contactNo.replace(/\s/g, ''))) {
        return NextResponse.json(
          { error: 'Invalid contact number format for member 2' },
          { status: 400 }
        );
      }
      members.push(member2);
    }

    if (memberCount === 4 && member3) {
      // Validate member3
      if (!studentNoRegex.test(member3.studentNo)) {
        return NextResponse.json(
          { error: 'Invalid student number format for member 3' },
          { status: 400 }
        );
      }
      if (!emailRegex.test(member3.email)) {
        return NextResponse.json(
          { error: 'Invalid email format for member 3' },
          { status: 400 }
        );
      }
      if (!contactRegex.test(member3.contactNo.replace(/\s/g, ''))) {
        return NextResponse.json(
          { error: 'Invalid contact number format for member 3' },
          { status: 400 }
        );
      }
      members.push(member3);
    }

    // Check for duplicate student numbers
    const allStudentNos = [
      leader.studentNo,
      ...members.map((m) => m.studentNo),
    ];
    const uniqueStudentNos = new Set(allStudentNos);
    if (uniqueStudentNos.size !== allStudentNos.length) {
      return NextResponse.json(
        { error: 'Duplicate student numbers found. Each team member must have a unique student number.' },
        { status: 400 }
      );
    }

    // Check for duplicate emails
    const allEmails = [leader.email, ...members.map((m) => m.email)];
    const uniqueEmails = new Set(allEmails);
    if (uniqueEmails.size !== allEmails.length) {
      return NextResponse.json(
        { error: 'Duplicate emails found. Each team member must have a unique email.' },
        { status: 400 }
      );
    }

    // Create team in database
    const team = await prisma.team.create({
      data: {
        teamName,
        membersCount: memberCount,
        leader: {
          name: leader.name,
          studentNo: leader.studentNo,
          contactNo: leader.contactNo,
          email: leader.email,
        },
        members,
      },
    });

    // Also save to Google Sheets
    try {
      const timestamp = new Date().toISOString();
      await appendToGoogleSheet({
        teamName,
        membersCount: memberCount,
        leader,
        members,
        timestamp,
      });
    } catch (sheetError) {
      // Log error but don't fail the registration
      console.error('Failed to save to Google Sheets:', sheetError);
    }

    // Send confirmation email
    try {
      await sendRegistrationEmail({
        teamName,
        membersCount: memberCount,
        leader,
        members,
      });
    } catch (emailError) {
      // Log error but don't fail the registration
      console.error('Failed to send confirmation email:', emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Team registered successfully!',
        teamId: team.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Failed to register team. Please try again.' },
      { status: 500 }
    );
  }
}
