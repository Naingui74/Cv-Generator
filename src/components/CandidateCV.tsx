import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalUser, faNotesMedical, faUser, faFileMedical, faClipboardUser, faLanguage, faPersonBreastfeeding } from '@fortawesome/free-solid-svg-icons';


interface CVProps {
  formData: {
    firstName: string;
    lastName: string;
    age: string;
    englishLevel: string;
    address: {
      city: string;
      postalCode: string;
      country: string;
    };
    profile: string;
    profilePicture: string;
    skills: {
      skill: string;
      selected: boolean;
    }[];
    languages: string[];
    drivingLicense: boolean;
    availableDate: string;
    bio: string;
    education: {
      school: string;
      diploma: string;
      field: string;
      startDate: string;
      endDate: string;
      description: string;
    }[];
    experienceYears: string;
    hasChildren: boolean;
    childrenDetails: string;
    hasPetAllergies: boolean;
    petAllergyDetails: string;
    experiences: {
      jobTitle: string;
      employmentType: string;
      company: string;
      location: { city: string; country: string };
      startDate: string;
      endDate: string;
      description: string;
    }[];
  };
}

const CandidateCV: React.FC<CVProps> = ({ formData }) => {
  const selectedSkills = formData.skills.filter(skill => skill.selected);

  console.log(formData);

  return (
    <div className="cv-container">
      {/* Header Section */}
      <div className="cv-header">
        <img src={`${process.env.PUBLIC_URL}/nanny.png`} alt="Icon" className="cv-icon-nanny" />
        {formData.profilePicture && (
          <div className="cv-photo-container">
            <img src={formData.profilePicture} alt="Profile" className="cv-profile-picture" />
          </div>
        )}
        <div className="cv-name-job">
          <h1>{formData.firstName} {formData.lastName}</h1>
        </div>
{/* Barres et logo */}
      </div>
      <div className="cv-name-job">
</div>
    {/* Contact Section */}
    <div className="cv-contact-info">
      <div className="title-container flex items-center">
        <FontAwesomeIcon icon={faUser} className="text-gold mx-2" />
        <h3>INFORMATIONS PERSONELLES</h3>
      </div>
      <div className="cv-contact-item">
        <p><strong>Address:</strong> {formData.address.city}, {formData.address.postalCode}, {formData.address.country}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Niveau d'anglais:</strong> {formData.englishLevel}</p>
        <p><strong>Permis de conduire:</strong> {formData.drivingLicense ? 'Oui' : 'Non'}</p>
        <p><strong>Date de disponibilité:</strong> {formData.availableDate}</p>
      </div>
    </div>
    {/* Profile Section */}
    <div className="cv-section">
    <div className='profile-header flex items-center'>
    <FontAwesomeIcon icon={faClipboardUser} className='profil-icon'/>
      <h3>Profil</h3>
      </div>
      <p>{formData.bio}</p>
    </div>
        {/* Education Section */}
        <div className="cv-section">
        <div className="education-header flex items-center">
        <FontAwesomeIcon icon={faFileMedical} className='education-icon' />
                  <h3>Formation</h3>
        </div>
        {formData.education.map((education, index) => (
          <div key={index} className="education-item">
            <p><strong>{education.school}</strong>{education.diploma}
            {education.field}</p>
            <p>{education.startDate} - {education.endDate}</p>
            <p>{education.description}</p>
          </div>
        ))}
      </div>
    {/* Experience Section */}
    <div className="cv-section">
      <div className='experience-header flex items-center'>
      <FontAwesomeIcon icon={faPersonBreastfeeding} className='experience-icon'/>
      <h3>Expériences professionnelles</h3>
      </div>
      {formData.experiences.map((experience, index) => (
        <div key={index} className="experience-item">
          <p><strong>{experience.jobTitle}</strong> chez : {experience.company} {experience.employmentType} </p>
          <p>{experience.startDate} - {experience.endDate}</p>
          <p>{experience.location.city}, {experience.location.country}</p>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  
    {/* Questions Section */}
    <div className="cv-section">
    <div className="questions-header flex items-center">
      <FontAwesomeIcon icon={faHospitalUser} className="questions-icon" />
      <h3>Questions</h3>
      </div>
      <p><strong>Combien d’années d’expérience dans la garde d’enfants avez-vous ?</strong> {formData.experienceYears}</p>
      <p><strong>Avez-vous des enfants ?</strong> {formData.hasChildren ? 'Oui' : 'Non'}</p>
      {formData.hasChildren && (
        <>
          <p><strong>Détails sur les enfants:</strong> {formData.childrenDetails}</p>
        </>
      )}
      <p><strong>Avez-vous des allergies aux animaux ?</strong> {formData.hasPetAllergies ? 'Oui' : 'Non'}</p>
      {formData.hasPetAllergies && (
        <>
          <p><strong>Détails des allergies:</strong> {formData.petAllergyDetails}</p>
        </>
      )}
    </div>
  
  
    {/* Skills Section */}
    <div className="cv-section">
    <div className="skills-header flex items-center">
    <FontAwesomeIcon icon={faNotesMedical} className='Skills'/>
      <h3>Compétences</h3>
    </div>
      <ul>
        {selectedSkills.map((skill, index) => (
          <li key={index}>{skill.skill}</li>
        ))}
      </ul>
    </div>
  
    {/* Languages Section */}
    <div className="cv-section">
    <div className="languages-header flex items-center">
      <FontAwesomeIcon icon={faLanguage} className='languages-icon' />
      <h3>Autres langues parlées</h3>
    </div>
      <ul>
        {formData.languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </div>
  </div>
  );
}  

export default CandidateCV;
