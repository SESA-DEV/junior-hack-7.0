'use client';

import { useState } from 'react';
import AlertDialog from './AlertDialog';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertDialog, setAlertDialog] = useState<{
    isOpen: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
  }>({
    isOpen: false,
    type: 'success',
    title: '',
    message: '',
  });
  const [formData, setFormData] = useState({
    teamName: '',
    membersCount: '4',
    leader: {
      name: '',
      studentNo: '',
      contactNo: '',
      email: '',
    },
    member1: {
      name: '',
      studentNo: '',
      contactNo: '',
      email: '',
    },
    member2: {
      name: '',
      studentNo: '',
      contactNo: '',
      email: '',
    },
    member3: {
      name: '',
      studentNo: '',
      contactNo: '',
      email: '',
    },
    agreement: false,
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Team info (1) + leader (1) + additional members (2 or 3) + agreement (1) = 5 or 6 steps
  // membersCount includes leader, so subtract 1 for additional member forms
  const totalSteps = 1 + 1 + (parseInt(formData.membersCount) - 1) + 1;

  // Validation function for individual fields
  const validateField = (name: string, value: string): string => {
    if (name === 'teamName' && value.trim() === '') {
      return 'Team name is required';
    }
    
    if (name.endsWith('.name') && value.trim() === '') {
      return 'Name is required';
    }
    
    if (name.endsWith('.studentNo')) {
      if (value.trim() === '') return 'Student number is required';
      // Format: SE/2022/032 or SE/2023/032
      // Two letters / (2022 or 2023) / three digits
      if (!/^[A-Z]{2}\/(2022|2023)\/\d{3}$/i.test(value)) {
        return 'Format: XX/2022/XXX or XX/2023/XXX (e.g., SE/2022/032)';
      }
    }
    
    if (name.endsWith('.contactNo')) {
      if (value.trim() === '') return 'Contact number is required';
      if (!/^\d{10}$/.test(value.replace(/\s/g, ''))) return 'Contact number must be 10 digits (e.g., 0771234567)';
    }
    
    if (name.endsWith('.email')) {
      if (value.trim() === '') return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
    }
    
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          teamName: formData.teamName,
          membersCount: formData.membersCount,
          leader: formData.leader,
          member1: parseInt(formData.membersCount) > 1 ? formData.member1 : null,
          member2: parseInt(formData.membersCount) > 2 ? formData.member2 : null,
          member3: parseInt(formData.membersCount) > 3 ? formData.member3 : null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to register team');
      }

      // Success!
      setAlertDialog({
        isOpen: true,
        type: 'success',
        title: 'Registration Successful!',
        message: `Team "${formData.teamName}" has been registered successfully for JuniorHack 7.0! Check your email for further details.`,
      });

      // Reset form after showing success
      setTimeout(() => {
        setFormData({
          teamName: '',
          membersCount: '4',
          leader: { name: '', studentNo: '', contactNo: '', email: '' },
          member1: { name: '', studentNo: '', contactNo: '', email: '' },
          member2: { name: '', studentNo: '', contactNo: '', email: '' },
          member3: { name: '', studentNo: '', contactNo: '', email: '' },
          agreement: false,
        });
        setTouched({});
        setErrors({});
        setCurrentStep(1);
      }, 500);
    } catch (error) {
      setAlertDialog({
        isOpen: true,
        type: 'error',
        title: 'Registration Failed',
        message: error instanceof Error ? error.message : 'Failed to register team. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      const parentData = formData[parent as keyof typeof formData];
      
      if (typeof parentData === 'object' && parentData !== null && !Array.isArray(parentData)) {
        setFormData({
          ...formData,
          [parent]: {
            ...parentData,
            [child]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
          },
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
      });
    }

    // Mark field as touched
    setTouched({ ...touched, [name]: true });

    // Validate field
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Mark field as touched on blur
    setTouched({ ...touched, [name]: true });
    
    // Validate field on blur
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      
      const target = e.target as HTMLInputElement;
      const { name, value } = target;
      
      // Validate current field
      const error = validateField(name, value);
      
      if (error) {
        // If there's an error, mark as touched and show error
        setTouched({ ...touched, [name]: true });
        setErrors({ ...errors, [name]: error });
        return;
      }
      
      // Find all input elements in the form
      const form = target.form;
      if (form) {
        const inputs = Array.from(form.querySelectorAll('input:not([type="radio"]):not([type="checkbox"])')) as HTMLInputElement[];
        const currentIndex = inputs.indexOf(target);
        
        // Move to next input
        if (currentIndex < inputs.length - 1) {
          inputs[currentIndex + 1].focus();
        } else if (currentIndex === inputs.length - 1) {
          // If it's the last input, check if current step is valid before moving
          if (isCurrentStepValid() && currentStep < totalSteps) {
            nextStep();
          }
        }
      }
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setCurrentStep(1);
      setFormData({
        teamName: '',
        membersCount: '4',
        leader: { name: '', studentNo: '', contactNo: '', email: '' },
        member1: { name: '', studentNo: '', contactNo: '', email: '' },
        member2: { name: '', studentNo: '', contactNo: '', email: '' },
        member3: { name: '', studentNo: '', contactNo: '', email: '' },
        agreement: false,
      });
      setTouched({});
      setErrors({});
    }, 300);
  };

  // Validation function to check if current step is complete
  const isCurrentStepValid = (): boolean => {
    // Step 1: Team Info
    if (currentStep === 1) {
      return formData.teamName.trim() !== '';
    }

    // Step 2: Leader Info
    if (currentStep === 2) {
      return (
        formData.leader.name.trim() !== '' &&
        formData.leader.studentNo.trim() !== '' &&
        formData.leader.contactNo.trim() !== '' &&
        formData.leader.email.trim() !== '' &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.leader.email) // Basic email validation
      );
    }

    // Steps 3-5: Member Info
    const memberIndex = currentStep - 2;
    const additionalMembers = parseInt(formData.membersCount) - 1; // Subtract leader
    
    if (memberIndex >= 1 && memberIndex <= additionalMembers) {
      const memberKey = `member${memberIndex}` as 'member1' | 'member2' | 'member3';
      const member = formData[memberKey];

      return (
        member.name.trim() !== '' &&
        member.studentNo.trim() !== '' &&
        member.contactNo.trim() !== '' &&
        member.email.trim() !== '' &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(member.email)
      );
    }

    // Final Step: Agreement
    if (currentStep === totalSteps) {
      return formData.agreement;
    }

    return false;
  };

  if (!isOpen) return null;

  // Helper function to render error message
  const renderError = (fieldName: string) => {
    if (touched[fieldName] && errors[fieldName]) {
      return <div className="error-message">{errors[fieldName]}</div>;
    }
    return null;
  };

  const renderStepContent = () => {
    // Step 1: Team Info
    if (currentStep === 1) {
      return (
        <>
          <div className="form-group w-full my-10">
            <input
              type="text"
              id="teamName"
              name="teamName"
              required
              placeholder=""
              value={formData.teamName}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className={touched.teamName && errors.teamName ? 'error' : ''}
            />
            <label htmlFor="teamName" className="form-label" data-text="TEAM_NAME">
              TEAM_NAME
            </label>
            {renderError('teamName')}
          </div>

          <div className="radio-section mt-6">
            <h3 className="radio-section-title">MEMBERS_COUNT</h3>
            <div className="glitch-radio-wrapper">

              <label className="glitch-radio-container">
                <input 
                  type="radio" 
                  name="membersCount" 
                  value="3"
                  checked={formData.membersCount === '3'}
                  onChange={handleChange}
                />
                <div className="radio-circle">
                  <div className="radio-dot"></div>
                  <div className="pulse" style={{ '--d': '0s' } as React.CSSProperties}></div>
                  <div className="pulse" style={{ '--d': '0.3s' } as React.CSSProperties}></div>
                </div>
                <span className="radio-label" data-text="3_MEMBERS">3_MEMBERS</span>
              </label>
              <label className="glitch-radio-container">
                <input 
                  type="radio" 
                  name="membersCount" 
                  value="4"
                  checked={formData.membersCount === '4'}
                  onChange={handleChange}
                />
                <div className="radio-circle">
                  <div className="radio-dot"></div>
                  <div className="pulse" style={{ '--d': '0s' } as React.CSSProperties}></div>
                  <div className="pulse" style={{ '--d': '0.3s' } as React.CSSProperties}></div>
                </div>
                <span className="radio-label" data-text="4_MEMBERS">4_MEMBERS</span>
              </label>
            </div>
          </div>
        </>
      );
    }

    // Step 2: Leader Info
    if (currentStep === 2) {
      return (
        <div className="form-grid mt-10">
          <div className="form-group">
            <input
              type="text"
              id="leader.name"
              name="leader.name"
              required
              placeholder=""
              value={formData.leader.name}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className={touched['leader.name'] && errors['leader.name'] ? 'error' : ''}
            />
            <label htmlFor="leader.name" className="form-label" data-text="LEADER_NAME">
              LEADER_NAME
            </label>
            {renderError('leader.name')}
          </div>

          <div className="form-group">
            <input
              type="text"
              id="leader.studentNo"
              name="leader.studentNo"
              required
              placeholder=""
              value={formData.leader.studentNo}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className={touched['leader.studentNo'] && errors['leader.studentNo'] ? 'error' : ''}
            />
            <label htmlFor="leader.studentNo" className="form-label" data-text="STUDENT_NO">
              STUDENT_NO
            </label>
            {renderError('leader.studentNo')}
          </div>

          <div className="form-group">
            <input
              type="number"
              id="leader.contactNo"
              name="leader.contactNo"
              required
              placeholder=""
              value={formData.leader.contactNo}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              maxLength={10}
              className={touched['leader.contactNo'] && errors['leader.contactNo'] ? 'error' : ''}
            />
            <label htmlFor="leader.contactNo" className="form-label" data-text="CONTACT_NO">
              CONTACT_NO
            </label>
            {renderError('leader.contactNo')}
          </div>

          <div className="form-group">
            <input
              type="email"
              id="leader.email"
              name="leader.email"
              required
              placeholder=""
              value={formData.leader.email}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className={touched['leader.email'] && errors['leader.email'] ? 'error' : ''}
            />
            <label htmlFor="leader.email" className="form-label" data-text="EMAIL">
              EMAIL
            </label>
            {renderError('leader.email')}
          </div>
        </div>
      );
    }

    // Steps 3-5: Member Info
    const memberIndex = currentStep - 2;
    const additionalMembers = parseInt(formData.membersCount) - 1; // Subtract leader
    
    // Check if this step is for a member form (not the final terms step)
    if (memberIndex >= 1 && memberIndex <= additionalMembers) {
      const memberKey = `member${memberIndex}` as 'member1' | 'member2' | 'member3';
      const member = formData[memberKey];

      return (
        <div className="form-grid  mt-10">
          <div className="form-group">
            <input
              type="text"
              id={`${memberKey}.name`}
              name={`${memberKey}.name`}
              required
              placeholder=""
              value={member.name}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className={touched[`${memberKey}.name`] && errors[`${memberKey}.name`] ? 'error' : ''}
            />
            <label htmlFor={`${memberKey}.name`} className="form-label" data-text={`MEMBER_${String(memberIndex).padStart(2, '0')}_NAME`}>
              MEMBER_{String(memberIndex).padStart(2, '0')}_NAME
            </label>
            {renderError(`${memberKey}.name`)}
          </div>

          <div className="form-group">
            <input
              type="text"
              id={`${memberKey}.studentNo`}
              name={`${memberKey}.studentNo`}
              required
              placeholder=""
              value={member.studentNo}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className={touched[`${memberKey}.studentNo`] && errors[`${memberKey}.studentNo`] ? 'error' : ''}
            />
            <label htmlFor={`${memberKey}.studentNo`} className="form-label" data-text="STUDENT_NO">
              STUDENT_NO
            </label>
            {renderError(`${memberKey}.studentNo`)}
          </div>

          <div className="form-group">
            <input
              type="number"
              id={`${memberKey}.contactNo`}
              name={`${memberKey}.contactNo`}
              required
              placeholder=""
              value={member.contactNo}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              maxLength={10}
              className={touched[`${memberKey}.contactNo`] && errors[`${memberKey}.contactNo`] ? 'error' : ''}
            />
            <label htmlFor={`${memberKey}.contactNo`} className="form-label" data-text="CONTACT_NO">
              CONTACT_NO
            </label>
            {renderError(`${memberKey}.contactNo`)}
          </div>

          <div className="form-group">
            <input
              type="email"
              id={`${memberKey}.email`}
              name={`${memberKey}.email`}
              required
              placeholder=""
              value={member.email}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className={touched[`${memberKey}.email`] && errors[`${memberKey}.email`] ? 'error' : ''}
            />
            <label htmlFor={`${memberKey}.email`} className="form-label" data-text="EMAIL">
              EMAIL
            </label>
            {renderError(`${memberKey}.email`)}
          </div>
        </div>
      );
    }

    // Final Step: Agreement
    if (currentStep === totalSteps) {
      return (
        <div className="agreement-section relative h-full">
          <div className="agreement-text">
            {/* <h3 className="text-primary-color text-lg font-bold mb-4 uppercase tracking-wider">
              TERMS_AND_CONDITIONS
            </h3> */}
            <div className="text-text-color text-sm leading-relaxed space-y-3 max-h-64 overflow-y-auto pr-2">
              <p>
                • By registering for JuniorHack 7.0, you acknowledge that all information provided is accurate and complete.
              </p>
              <p>
                • All team members must be 1st or 2nd year undergraduates from the University of Kelaniya.
              </p>
              <p>
                • Teams must participate in both the Pre-Hack online challenge and Final Hack (if qualified).
              </p>
              <p>
                • The organizing committee reserves the right to verify all participant information.
              </p>
              <p>
                • By participating, you agree to follow the code of conduct and hackathon rules.
              </p>
              <p>
                • All intellectual property created during the hackathon remains with the team.
              </p>
              <p>
                • The organizers may use photos/videos taken during the event for promotional purposes.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0">
            <label className="glitch-checkbox-container">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                required
                checked={formData.agreement}
                onChange={handleChange}
              />
              <div className="checkbox-box">
                <div className="checkbox-mark"></div>
              </div>
              <span className="checkbox-label" data-text="I_AGREE_TO_TERMS_AND_CONDITIONS">
                I_AGREE_TO_TERMS_AND_CONDITIONS
              </span>
            </label>
          </div>
        </div>
      );
    }

    return null;
  };

  const getStepTitle = () => {
    if (currentStep === 1) return 'TEAM_INFORMATION';
    if (currentStep === 2) return 'LEADER_INFORMATION';
    if (currentStep === totalSteps) return 'TERMS_&_CONDITIONS';
    const memberIndex = currentStep - 2;
    return `MEMBER_${String(memberIndex).padStart(2, '0')}_INFORMATION`;
  };

  return (
    <>
      <AlertDialog
        isOpen={alertDialog.isOpen}
        type={alertDialog.type}
        title={alertDialog.title}
        message={alertDialog.message}
        onClose={() => {
          setAlertDialog({ ...alertDialog, isOpen: false });
          if (alertDialog.type === 'success') {
            onClose();
          }
        }}
      />

      <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="glitch-form-wrapper" onClick={(e) => e.stopPropagation()}>
        <form className="glitch-card" onSubmit={handleSubmit}>
          <div className="card-header">
            <div className="card-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M12 11.5a3 3 0 0 0 -3 2.824v1.176a3 3 0 0 0 6 0v-1.176a3 3 0 0 0 -3 -2.824z"></path>
              </svg>
              <span>JUNIORHACK_7.0</span>
            </div>

            <button 
              type="button"
              onClick={handleClose}
              className="close-button"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 6l-12 12"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>

            {/* Progress Bar as underline */}
            <div className="header-progress-bar">
              <div 
                className="header-progress-fill" 
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="card-body">
            <div className="form-content">
              <h2 className="step-title">{getStepTitle()}</h2>
              
              {renderStepContent()}
            </div>

            <div className="button-group">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="submit-btn secondary-btn"
                  data-text="PREVIOUS"
                >
                  <span className="btn-text">PREVIOUS</span>
                </button>
              )}
              
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="submit-btn"
                  data-text="NEXT"
                  disabled={!isCurrentStepValid()}
                >
                  <span className="btn-text">NEXT</span>
                </button>
              ) : (
                <button 
                  type="submit" 
                  className="submit-btn" 
                  data-text={isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                  disabled={!formData.agreement || isSubmitting}
                >
                  <span className="btn-text">{isSubmitting ? "SUBMITTING..." : "SUBMIT"}</span>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
