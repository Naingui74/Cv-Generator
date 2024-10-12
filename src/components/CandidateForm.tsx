import React, { useState } from "react";
import CandidateCV from "./CandidateCV";
import '../styles/CandidateForm.scss';
import '../styles/CandidateCV.scss';
import Checkbox from '@mui/material/Checkbox';
import { yellow } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CloudUpload as CloudUploadIcon } from "@mui/icons-material";
import DownloadPDF from "./DownloadPDF";


const employmentTypes = [
  "CDI",
  "Indépendant",
  "Freelance",
  "CDD",
  "Stage",
  "Alternance",
  "CDI Temps partiel",
  "CDD Temps partiel"
];



const skillsList = [
  { title: 'Se baigner et s\'habiller' },
  { title: 'Hygiène (dents/ongles)' },
  { title: 'Changer les couches' },
  { title: 'Apprentissage de la propreté' },
  { title: 'Préparation et stérilisation des biberons' },
  { title: 'Alimentation au biberon' },
  { title: 'Sevrage' },
  { title: 'Planification des repas, préparation des repas, batch cooking' },
  { title: 'Cadre de routine pour les bébés/tout-petits' },
  { title: 'Organisation de rendez-vous de jeu et de sorties' },
  { title: 'Activités pédagogiques et artisanales' },
  { title: 'Lecture aux enfants' },
  { title: 'Aide aux devoirs' },
  { title: 'Organisation des chambres/jouets' },
  { title: 'Administrer des médicaments avec le consentement des parents' },
  { title: 'Tenir des journaux pour les parents' },
  { title: 'Laverie pour enfants' },
  { title: 'La lessive des parents' },
  { title: 'Repassage' },
  { title: 'Ménage léger' },
  { title: 'Faire les courses (bureau de poste, ménage, épicerie)' },
  { title: 'Voyager en famille' },
  { title: 'Garde d\'enfants' },
  { title: 'Parentalité par procuration/garde de nuit' }
];

const languagesList = [
  { title: 'Anglais' },
  { title: 'Français' },
  { title: 'Espagnol' },
  { title: 'Allemand' },
  { title: 'Italien' },
  { title: 'Chinois' },
  { title: 'Japonais' },
  { title: 'Coréen' },
  { title: 'Arabe' },
  { title: 'Russe' },
  { title: 'Portugais' },
  { title: 'Néerlandais' },
  { title: 'Suédois' },
  { title: 'Danois' },
  { title: 'Norvégien' },
  { title: 'Finnois' },
  { title: 'Polonais' },
  { title: 'Hongrois' },
  { title: 'Tchèque' },
  { title: 'Slovaque' },
  { title: 'Roumain' },
  { title: 'Bulgare' },
  { title: 'Croate' },
  { title: 'Slovène' },
];


const CandidateForm: React.FC = () => {
  /*const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    birthCountry: 'France',
    profilePicture: '',
    address: {
      city: '',
      postalCode: '',
      country: 'France', // Pays par défaut
    },
    phone: '',
    email: '',
    profile: '',
    englishLevel: '',
    languages: [] as string[],  // Autres langues parlées couramment
    drivingLicense: false,  // Permis
    availableDate: '', // Date de disponibilité
    bio: '',  // Biographie
    education: [
      { school: '', diploma: '', field: '', startDate: '', endDate: '', description: '' }
    ],
    experienceYears: '', // Années d'expérience dans la garde d'enfants
    hasChildren: false,  // Avez-vous des enfants ?
    childrenDetails: '', // Détails sur les enfants (nombre et âge) si 'Oui'
    hasPetAllergies: false, // Avez-vous des allergies aux animaux ?
    petAllergyDetails: '',  // Détails des allergies si 'Oui'
    skills: [] as { skill: string; selected: boolean }[],  // Compétences sélectionnées
    experiences: [
      {
        jobTitle: '',
        employmentType: '',
        company: '',
        location: { city: '', country: '' },
        startDate: '',
        endDate: '',
        description: ''
      }
    ]
  });*/
  const [formData, setFormData] = useState({
    firstName: 'Aaron',
    lastName: 'Groux',
    age: '19',
    birthCountry: 'France',
    profilePicture: '',
    address: {
      city: 'Royan',
      postalCode: '17570',
      country: 'France', // Pays par défaut
    },
    profile: '',
    englishLevel: 'B2',
    languages: [] as string[],  // Autres langues parlées couramment
    drivingLicense: true,  // Permis
    availableDate: '10/23/2024', // Date de disponibilité
    bio: 'Bla blaBla blaBla blaBla blaBla blaBla blaBla blaBla blaBla blaBla blaBla blaBla blaBla blaBla bla',  // Biographie
    education: [
      { school: 'Epitech', diploma: 'Bac +5 ', field: 'Informatique', startDate: '24/05/2020', endDate: '24/05/2025', description: 'Epitech est une ecole super mega efficace qui tue je vous la recommande pas du tout nan sah c nul a chier' }
    ],
    experienceYears: '10', // Années d'expérience dans la garde d'enfants
    hasChildren: true,  // Avez-vous des enfants ?
    childrenDetails: '102', // Détails sur les enfants (nombre et âge) si 'Oui'
    hasPetAllergies: true, // Avez-vous des allergies aux animaux ?
    petAllergyDetails: 'Caca',  // Détails des allergies si 'Oui'
    skills: [] as { skill: string; selected: boolean }[],  // Compétences sélectionnées
    experiences: [
      {
        jobTitle: 'Vendeur Epicier',
        employmentType: 'CDI',
        company: 'Okalage',
        location: { city: 'Argenteuil', country: 'France' },
        startDate: '23/03/2019',
        endDate: '23/09/2023',
        description: 'Epicier du coin du connais on a pas eu une enfance difficile 10k minimun par seconde killian mbbappe je te bz ta mére ouaiki free'
      }
    ]
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    console.log(name, value, type);
    const fieldValue = type === 'checkbox' && e.target instanceof HTMLInputElement ? e.target.checked : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value
      }
    });
  }

  // Fonction pour supprimer une formation, mais seulement s'il y en a plus d'une
  const removeEducation = (index: number) => {
    if (formData.education.length > 1) {
      const updatedEducation = formData.education.filter((_, i) => i !== index);
      setFormData({
        ...formData,
        education: updatedEducation
      });
    }
  };


  const handleEducationChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedEducation = [...formData.education];
    updatedEducation[index] = { ...updatedEducation[index], [name]: value };
    setFormData({ ...formData, education: updatedEducation });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { school: '', diploma: '', field: '', startDate: '', endDate: '', description: '' }]
    });
  };

  const handleLanguageChange = (event: any, newValue: { title: string }[]) => {
    setFormData({
      ...formData,
      languages: newValue.map(option => option.title)
    });
  };

  const handleSkillChange = (event: any, newValue: { title: string }[]) => {
    setFormData({
      ...formData,
      skills: newValue.map(option => ({ skill: option.title, selected: true }))
    });
  };

  const handleExperienceChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index] = { ...updatedExperiences[index], [name]: value };
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const handleExperienceLocationChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      location: {
        ...updatedExperiences[index].location,
        [name]: value
      }
    };
    setFormData({ ...formData, experiences: updatedExperiences });
  }


  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, drivingLicense: e.target.checked });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        {
          jobTitle: '',
          employmentType: '',
          company: '',
          location: { city: '', country: '' },
          startDate: '',
          endDate: '',
          description: ''
        }
      ]
    });
  };

  const removeExperience = (index: number) => {
    const newExperience = formData.experiences.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      experiences: newExperience
    });
  };

  const handleChangeForm = (id: string, value?: boolean | string | null) => {
    setFormData({
      ...formData,
      [id]: value,
    });
  };

const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (event.target.files && event.target.files[0]) {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);  // Génère une URL temporaire pour l'image
    setFormData({ ...formData, profilePicture: imageUrl });
    }
  };

  return (
    <div className="main-container">
    <div className="form-container">
      <form className="candidate-form">
        {/* Informations Personnelles */}
        <h5>Nanny Prestige CV</h5>
        <div className="input-group">
        <img src={`${process.env.PUBLIC_URL}/nannny.png`} alt="Icon" className="cv-icon" />
          <div>
            <label>Prénom:</label>
                <input className="form-field-short" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </div>
          <div>
            <label>Nom:</label>
            <input className="form-field-short" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
        </div>

        <div className="input-group">
        </div>
  <div>
    <label>Âge:</label>
    <input className="form-field-short" type="number" name="age" value={formData.age} onChange={handleChange} />
  </div>
        {/* Autres champs du formulaire */}
        
        {/* Bouton de téléchargement d'image */}
        <div>
          <Button
            component="label"
            variant="contained"
            sx={{ backgroundColor: "#C7A44C", color: "white", fontFamily: "Arial", serif: "normal", fontSize: "18px" }}
            startIcon={<CloudUploadIcon />}
          >
            TÉLÉCHARGER UNE PHOTO
            <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
          </Button>
        </div>


        <div>
          <label>Adresse:</label>
          <input className="form-field" type="text" name="city" placeholder="Ville" value={formData.address.city} onChange={handleChangeAddress} />
          <input className="form-field" type="text" name="postalCode" placeholder="Code Postal" value={formData.address.postalCode} onChange={handleChangeAddress} />
          <select className="form-field" name="country" value={formData.address.country} onChange={handleChangeAddress}>
          <option value="France">France</option>
          <option value="Belgique">Belgique</option>
          <option value="Suisse">Suisse</option>
          <option value="Allemagne">Allemagne</option>
          <option value="Espagne">Espagne</option>
          <option value="Italie">Italie</option>
          <option value="Portugal">Portugal</option>
          <option value="Pays-Bas">Pays-Bas</option>
          <option value="Royaume-Uni">Royaume-Uni</option>
          <option value="Irlande">Irlande</option>
          <option value="Autriche">Autriche</option>
          <option value="Suède">Suède</option>
          <option value="Norvège">Norvège</option>
          <option value="Danemark">Danemark</option>
          <option value="Finlande">Finlande</option>
          <option value="Grèce">Grèce</option>
          <option value="Pologne">Pologne</option>
          <option value="Hongrie">Hongrie</option>
          <option value="République Tchèque">République Tchèque</option>
          <option value="Slovaquie">Slovaquie</option>
          <option value="Roumanie">Roumanie</option>
          <option value="Bulgarie">Bulgarie</option>
          <option value="Croatie">Croatie</option>
          <option value="Slovénie">Slovénie</option>
          <option value="Estonie">Estonie</option>
          <option value="Lettonie">Lettonie</option>
          <option value="Lituanie">Lituanie</option>
          <option value="Luxembourg">Luxembourg</option>
          <option value="Malte">Malte</option>
          <option value="Chypre">Chypre</option>
          </select>
        </div>

        <div>
          <label>Niveau d'anglais:</label>
          <select className="form-field" name="englishLevel" value={formData.englishLevel} onChange={handleChange}>
            <option value="">Sélectionner le niveau</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
          </select>
        </div>

   {/* Section Langues */}
        <div>
          <label>Autres langues parlées:</label>
          <Autocomplete
            multiple
            id="languages-autocomplete"
            options={languagesList}
            getOptionLabel={(option) => option.title}
            value={formData.languages.map(lang => ({ title: lang }))}
            onChange={handleLanguageChange}
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => (
                <Chip label={option.title} {...getTagProps({ index })} key={index} />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} label="" placeholder="Sélectionnez les langues" />
            )}
          />
        </div>
        <div>
          <label>Permis:</label>
          {/* Utilisation du bouton Checkbox Material-UI */}
          <Checkbox
            checked={formData.drivingLicense}
            onChange={handleCheckboxChange}
            sx={{
              color: yellow[600],
              '&.Mui-checked': {
                color: yellow[600],
              },
            }}
          /> Veuillez cliquer sur la case si vous avez un permis de conduire.
        </div>

        <div>
          <label>Date de disponibilité:</label>
          <input className="form-field" type="date" name="availableDate" value={formData.availableDate} onChange={handleChange} />
        </div>

        <div>
          <label>Biographie:</label>
          <textarea className="form-field-large" name="bio" value={formData.bio} onChange={handleChange} maxLength={500} placeholder="Max 500 caractères"></textarea>
        </div>

        {/* Section Education */}
        <div>
          <h3>Formation</h3>
          {formData.education.map((edu, index) => (
            <div key={index}>
              <input
                className="form-field"
                type="text"
                name="school"
                placeholder="École"
                value={edu.school}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <input
                className="form-field"
                type="text"
                name="diploma"
                placeholder="Diplôme"
                value={edu.diploma}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <input
                className="form-field"
                type="text"
                name="field"
                placeholder="Domaine d'études"
                value={edu.field}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <input
                className="form-field"
                type="month"
                name="startDate"
                placeholder="Date de début"
                value={edu.startDate}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <input
                className="form-field"
                type="month"
                name="endDate"
                placeholder="Date de fin"
                value={edu.endDate}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <textarea
                className="form-field-large"
                name="description"
                placeholder="Description"
                value={edu.description}
                onChange={(e) => handleEducationChange(index, e)}
                />
                </div>
              ))}
      
                {/* Boutons Ajouter et Supprimer une formation */}
                <div style={{ marginTop: '10px' }}></div>
                <button type="button" onClick={addEducation} className="add-button">+ AJOUTER UNE FORMATION</button>
                
                {/* Affichez le bouton "SUPPRIMER UNE FORMATION" uniquement si la longueur de education est supérieure à 1 */}
                <div style={{ marginTop: '10px' }}></div>
                {formData.education.length > 1 && (
                <button type="button" onClick={() => removeEducation(formData.education.length - 1)} className="remove-button">- SUPPRIMER UNE FORMATION</button>
              )}
            </div>
          {/* Expérience professionnelle */}
          <div>
          <h3>Votre expérience dans la garde d'enfants</h3>
          {formData.experiences.map((experience, index) => (
            <div key={index}>
              <input
                className="form-field"
                type="text"
                name="jobTitle"
                placeholder="Intitulé de poste"
                value={experience.jobTitle}
                onChange={(e) => handleExperienceChange(index, e)}
              />
              <select
                className="form-field"
                name="employmentType"
                value={experience.employmentType}
                onChange={(e) => handleExperienceChange(index, e)}
              >
                <option value="">Type d'emploi</option>
                {employmentTypes.map((type, idx) => (
                  <option key={idx} value={type}>{type}</option>
                ))}
              </select>
              <input
                className="form-field"
                type="text"
                name="company"
                placeholder="Nom de l'entreprise"
                value={experience.company}
                onChange={(e) => handleExperienceChange(index, e)}
              />
              <input
                className="form-field"
                type="text"
                name="city"
                placeholder="Ville"
                value={experience.location.city}
                onChange={(e) => handleExperienceLocationChange(index, e)}
              />
              <select
                className="form-field"
                name="country"
                value={experience.location.country}
                onChange={(e) => handleExperienceLocationChange(index, e)}
              >
                <option value="">Sélectionner le pays</option>
                <option value="France">France</option>
                <option value="Belgique">Belgique</option>
                <option value="Suisse">Suisse</option>
                <option value="Allemagne">Allemagne</option>
                <option value="Espagne">Espagne</option>
                <option value="Italie">Italie</option>
                <option value="Portugal">Portugal</option>
                <option value="Pays-Bas">Pays-Bas</option>
                <option value="Royaume-Uni">Royaume-Uni</option>
                <option value="Irlande">Irlande</option>
                <option value="Autriche">Autriche</option>
                <option value="Suède">Suède</option>
                <option value="Norvège">Norvège</option>
                <option value="Danemark">Danemark</option>
                <option value="Finlande">Finlande</option>
                <option value="Grèce">Grèce</option>
                <option value="Pologne">Pologne</option>
                <option value="Hongrie">Hongrie</option>
                <option value="République Tchèque">République Tchèque</option>
                <option value="Slovaquie">Slovaquie</option>
                <option value="Roumanie">Roumanie</option>
                <option value="Bulgarie">Bulgarie</option>
                <option value="Croatie">Croatie</option>
                <option value="Slovénie">Slovénie</option>
                <option value="Estonie">Estonie</option>
                <option value="Lettonie">Lettonie</option>
                <option value="Lituanie">Lituanie</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Malte">Malte</option>
                <option value="Chypre">Chypre</option>
              </select>
              <input
                className="form-field"
                type="month"
                name="startDate"
                placeholder="Date de début"
                value={experience.startDate}
                onChange={(e) => handleExperienceChange(index, e)}
              />
              <input
                className="form-field"
                type="month"
                name="endDate"
                placeholder="Date de fin (optionnel)"
                value={experience.endDate}
                onChange={(e) => handleExperienceChange(index, e)}
              />
              <textarea
                className="form-field-large"
                name="description"
                placeholder="Description"
                value={experience.description}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </div>
          ))}
{/* Boutons Ajouter et Supprimer une expérience */}
<div style={{ marginTop: '10px' }}></div>
<button type="button" onClick={addExperience} className="add-button">+ AJOUTER UNE EXPÉRIENCE</button>

{/* Affichez le bouton "SUPPRIMER UNE EXPÉRIENCE" uniquement si la longueur de experience est supérieure à 1 */}
<div style={{ marginTop: '10px' }}></div>
{formData.experiences.length > 1 && (
  <button type="button" onClick={() => removeExperience(formData.experiences.length - 1)} className="remove-button">- SUPPRIMER UNE EXPÉRIENCE</button>
)}        </div>
        <div>
  <label>Combien d’années d’expérience dans la garde d’enfants avez-vous ?</label>
  <input
    className="form-field"
    type="text"
    name="experienceYears"
    value={formData.experienceYears}
    onChange={handleChange}
  />
</div>

<div>
  <label>Avez-vous des enfants ?</label>
  <Checkbox
    checked={formData.hasChildren}
    onChange={(e) => handleChangeForm("hasChildren", e.target.checked)}
    sx={{
      color: yellow[600],
      '&.Mui-checked': {
        color: yellow[600],
      },
    }}
  />
  {formData.hasChildren && (
    <div>
      <label>Si oui, combien en avez-vous et quels âges ont-ils ?</label>
      <input
        className="form-field"
        type="text"
        name="childrenDetails"
        value={formData.childrenDetails}
        onChange={(e) => handleChangeForm("childrenDetails", e.target.value)}
      />
    </div>
  )}
</div>

<div>
  <label>Avez-vous des allergies aux animaux ?</label>
  <Checkbox
    checked={formData.hasPetAllergies}
    onChange={(e) => handleChangeForm("hasPetAllergies", e.target.checked)}
    sx={{
      color: yellow[600],
      '&.Mui-checked': {
        color: yellow[600],
      },
    }}
  />
  {formData.hasPetAllergies && (
    <div>
      <label>Si oui, précisez :</label>
      <input
        className="form-field"
        type="text"
        name="petAllergyDetails"
        value={formData.petAllergyDetails}
        onChange={(e) => handleChangeForm("petAllergyDetails", e.target.value)}
      />
    </div>
  )}
</div>

        {/* Section Compétences */}
        <div>
          <label>Compétences:</label>
          <Autocomplete
            multiple
            id="skills-autocomplete"
            options={skillsList}
            getOptionLabel={(option) => option.title}
            value={formData.skills.map(skill => ({ title: skill.skill }))}
            onChange={handleSkillChange}
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => (
                <Chip label={option.title} {...getTagProps({ index })} key={index} />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} label="" placeholder="Sélectionnez les compétences" />
            )}
          />
        </div>

      {/* Add the download button for the PDF */}
      <div style={{ marginTop: '20px' }}>
        <DownloadPDF formData={formData} />
      </div>
      </form>
    </div>

    {/* Autres sections (Expériences, etc.) */}
    <CandidateCV formData={formData} />
    </div>
  );
}

export default CandidateForm;