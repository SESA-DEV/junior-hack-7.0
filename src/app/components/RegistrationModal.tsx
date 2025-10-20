'use client';

import { useState } from 'react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    teamName: '',
    membersCount: '2',
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

  const totalSteps = parseInt(formData.membersCount) + 2; // Team info + leader + members + agreement

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
      if (!/^[A-Za-z0-9]+$/.test(value)) return 'Invalid student number format';
    }
    
    if (name.endsWith('.contactNo')) {
      if (value.trim() === '') return 'Contact number is required';
      if (!/^\d{10}$/.test(value.replace(/\s/g, ''))) return 'Contact number must be 10 digits';
    }
    
    if (name.endsWith('.email')) {
      if (value.trim() === '') return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
    }
    
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call here
    onClose();
    setCurrentStep(1); // Reset to step 1
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
    if (memberIndex >= 1 && memberIndex <= 3) {
      const memberKey = `member${memberIndex}` as 'member1' | 'member2' | 'member3';
      const member = formData[memberKey];
      const isRequired = memberIndex <= parseInt(formData.membersCount) - 1;

      if (!isRequired) {
        return true; // Skip validation if member is not required
      }

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
              className={touched['leader.studentNo'] && errors['leader.studentNo'] ? 'error' : ''}
            />
            <label htmlFor="leader.studentNo" className="form-label" data-text="STUDENT_NO">
              STUDENT_NO
            </label>
            {renderError('leader.studentNo')}
          </div>

          <div className="form-group">
            <input
              type="tel"
              id="leader.contactNo"
              name="leader.contactNo"
              required
              placeholder=""
              value={formData.leader.contactNo}
              onChange={handleChange}
              onBlur={handleBlur}
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
    if (memberIndex >= 1 && memberIndex <= 3) {
      const memberKey = `member${memberIndex}` as 'member1' | 'member2' | 'member3';
      const member = formData[memberKey];
      const isRequired = memberIndex <= parseInt(formData.membersCount) - 1;

      if (!isRequired) {
        // Skip to next step if this member is not needed
        setTimeout(() => nextStep(), 0);
        return null;
      }

      return (
        <div className="form-grid  mt-10">
          <div className="form-group">
            <input
              type="text"
              id={`${memberKey}.name`}
              name={`${memberKey}.name`}
              required={isRequired}
              placeholder=""
              value={member.name}
              onChange={handleChange}
              onBlur={handleBlur}
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
              required={isRequired}
              placeholder=""
              value={member.studentNo}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched[`${memberKey}.studentNo`] && errors[`${memberKey}.studentNo`] ? 'error' : ''}
            />
            <label htmlFor={`${memberKey}.studentNo`} className="form-label" data-text="STUDENT_NO">
              STUDENT_NO
            </label>
            {renderError(`${memberKey}.studentNo`)}
          </div>

          <div className="form-group">
            <input
              type="tel"
              id={`${memberKey}.contactNo`}
              name={`${memberKey}.contactNo`}
              required={isRequired}
              placeholder=""
              value={member.contactNo}
              onChange={handleChange}
              onBlur={handleBlur}
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
              required={isRequired}
              placeholder=""
              value={member.email}
              onChange={handleChange}
              onBlur={handleBlur}
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={handleClose}>
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
                  data-text="SUBMIT"
                  disabled={!formData.agreement}
                >
                  <span className="btn-text">SUBMIT</span>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
