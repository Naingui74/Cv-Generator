import React, { ReactNode } from 'react';
import { Document, Font, Page, Text, View, StyleSheet, Image, Path, Svg } from '@react-pdf/renderer';

Font.register({ family: 'IBMPlexSans', src: "/fonts/IBM_Plex_Sans/IBMPlexSans-Regular.ttf" });

interface CVProps {
  formData: {
    profilePicture?: string;
    firstName: string;
    lastName: string;
    address: {
      city: string;
      postalCode: string;
      country: string;
    };
    age: number;
    englishLevel: string;
    drivingLicense: boolean;
    bio: string;
    experiences: {
      jobTitle: string;
      company: string;
      startDate: string;
      endDate: string;
      location: {
        city: string;
        country: string;
      };
      description: string;
    }[];
    education: {
      school: string;
      diploma: string;
      field: string;
      startDate: string;
      endDate: string;
      description: string;
    }[];
    skills: {
      name: ReactNode;
      skill: string;
      selected: boolean;
    }[];
    languages: string[];
    experienceYears: number;
    hasChildren: boolean;
    childrenDetails?: string;
    hasPetAllergies: boolean;
    petAllergyDetails?: string;
  };
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  headerSection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 40, // Augmenté pour laisser plus d'espace en bas de la photo
  },
  photo: {
    borderRadius: '50%',
    width: 100,
    height: 100,
    objectFit: 'cover',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    marginTop: 10,
    marginBottom: 20, // Espacement supplémentaire sous le nom
  },
  contactInfoSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30, // Augmenté pour plus d'espacement entre les sections
  },
  contactInfoItem: {
    fontSize: 12,
    lineHeight: 1.5,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 15, // Espacement accru sous les titres
  },
  profileSection: {
    marginBottom: 30, // Augmenté pour descendre plus bas
  },
  text: {
    fontSize: 10,
    fontFamily: 'IBMPlexSans',
    lineHeight: 1.5, // Espacement entre les lignes
  },
  experienceSection: {
    marginBottom: 30, // Augmenté pour plus d'espacement entre les expériences
  },
  boldText: {
    fontSize: 12,
    fontWeight: 'bold', // Texte en gras
  },
  skillsSection: {
    marginBottom: 30, // Espacement ajouté avant la section des compétences
  },
  listItem: {
    fontSize: 12,
    marginBottom: 5,
  },
  educationSection: {
    marginBottom: 30, // Augmenté pour plus d'espacement entre les études
  },
  horizontalLine: {
    borderBottom: '1px solid #C7A44C', // Style de la ligne horizontale
    marginBottom: 20, // Espacement sous la ligne
    color: '#C7A44C', // Couleur de la ligne
  },
  icon: {
    width: 20, // Largeur de l'icône
    height: 20, // Taille de l'icône
    marginRight: 3, // Espacement entre l'icône et le titre
    marginBottom: 13, // Espacement sous l'icône
  },
  iconAndTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Espacement entre l'icône et la formation
  },
  iconAndTitle2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Espacement entre l'icône et la formation
  },
  iconAndTitle3: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Espacement entre l'icône et la formation
  },
  iconAndTitle4: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Espacement entre l'icône et la formation
  },
  iconAndTitle5: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Espacement entre l'icône et la formation
  },
});

const CandidatePDF: React.FC<CVProps> = ({ formData }) => {
  const selectedSkills = formData.skills.filter(skill => skill.selected);
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          {formData.profilePicture && (
            <Image src={formData.profilePicture} style={styles.photo} />
          )}
          <Text style={styles.name}>
            {formData.firstName} {formData.lastName}
          </Text>
        </View>

       {/* Contact Information */}
       <View style={styles.iconAndTitle4}>
          {/* SVG Icon */}
          <Svg viewBox="0 0 448 512" style={styles.icon}>
            <Path 
              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
              fill="#C7A44C" // Couleur dorée (gold)
            />
          </Svg>
          <Text style={styles.sectionTitle}>Informations Personnelles :</Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.contactInfoSection}>
          <Text style={styles.contactInfoItem}>
            <Text style={styles.boldText}>Address:</Text> {formData.address.city}, {formData.address.postalCode}, {formData.address.country}
          </Text>
          <Text style={styles.contactInfoItem}>
            <Text style={styles.boldText}>Age:</Text> {formData.age}
          </Text>
          <Text style={styles.contactInfoItem}>
            <Text style={styles.boldText}>Niveau d'anglais:</Text> {formData.englishLevel}
          </Text>
          <Text style={styles.contactInfoItem}>
            <Text style={styles.boldText}>Permis de conduire:</Text> {formData.drivingLicense ? 'Oui' : 'Non'}
          </Text>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.iconAndTitle3}>
            {/* SVG Icon */}
            <Svg viewBox="0 0 384 512" style={styles.icon}>
              <Path 
                d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM128 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM80 432c0-44.2 35.8-80 80-80l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L96 448c-8.8 0-16-7.2-16-16z"
                fill="#C7A44C" // Couleur dorée (gold)
              />
            </Svg>
            <Text style={styles.sectionTitle}>Profil :</Text>
          </View>
          <View style={styles.horizontalLine} />
          <Text style={styles.text}>{formData.bio}</Text>
        </View>

        {/* Experience Section */}
        {formData.experiences.length > 0 && (
          <View style={styles.experienceSection}>
            <View style={styles.iconAndTitle2}>
              {/* SVG Icon */}
              <Svg viewBox="0 0 448 512" style={styles.icon}>
                <Path 
                  d="M224 0a80 80 0 1 1 0 160A80 80 0 1 1 224 0zM436.8 382.8L373.5 462c-16.6 20.7-46.8 24.1-67.5 7.5c-17.6-14.1-22.7-38.1-13.5-57.7l-.8-.1c-38.9-5.6-74.3-25.1-99.7-54.8l0-36.8c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48c0 .8 0 1.6 .1 2.4l101.4 50.7c23.7 11.9 33.3 40.7 21.5 64.4s-40.7 33.3-64.4 21.5L27.2 427.3c-1.1-.5-2.2-1.1-3.3-1.7c-4.9-2.8-9.2-6.4-12.6-10.6c-4.6-5.4-7.8-11.7-9.6-18.4c-3.3-12-1.9-25.2 4.8-36.6c.6-1.1 1.3-2.2 2-3.2L75.6 256.1c26.7-40.1 71.7-64.1 119.8-64.1l75.2 0c46.5 0 90.1 22.5 117.2 60.3l50.7 70.9c2.2 3 4 6.1 5.5 9.4c2.9 6.7 4.3 13.8 4 20.8c-.3 10.6-4.2 21-11.2 29.4zM320 332a44 44 0 1 0 -88 0 44 44 0 1 0 88 0z"
                  fill="#C7A44C" // Couleur dorée (gold)
                />
              </Svg>
              <Text style={styles.sectionTitle}>Expériences professionnelles :</Text>
            </View>
            <View style={styles.horizontalLine} />
            {formData.experiences.map((experience, index) => (
              <View key={index}>
                <Text style={styles.boldText}>{experience.jobTitle} chez {experience.company}</Text>
                <Text style={styles.text}>{experience.startDate} - {experience.endDate}</Text>
                <Text style={styles.text}>{experience.location.city}, {experience.location.country}</Text>
                <Text style={styles.text}>{experience.description}</Text>
              </View>
            ))}
          </View>
        )}
        {/* Education Section */}
        {formData.education.length > 0 && (
          <View style={styles.educationSection}>
            <View style={styles.iconAndTitle}>
              {/* SVG Icon */}
              <Svg viewBox="0 0 384 512" style={styles.icon}>
              <Path 
                d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM160 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z"
                fill="#C7A44C" // Couleur dorée (gold)
                />
              </Svg>
              <Text style={styles.sectionTitle}>Formation :</Text>
            </View>
            <View style={styles.horizontalLine} />
            {formData.education.map((edu, index) => (
              <View key={index}>
                <Text style={styles.boldText}>{edu.school} - {edu.diploma} ({edu.field})</Text>
                <Text style={styles.text}>{edu.startDate} - {edu.endDate}</Text>
                <Text style={styles.text}>{edu.description}</Text>
              </View>
            ))}
          </View>
        )}
        {/* Skills Section */}
        {selectedSkills.length > 0 && (
          <View style={styles.skillsSection}>
            <View style={styles.iconAndTitle}>
              {/* SVG Icon */}
              <Svg viewBox="0 0 512 512" style={styles.icon}>
                <Path 
                  d="M96 352L96 96c0-35.3 28.7-64 64-64l256 0c35.3 0 64 28.7 64 64l0 197.5c0 17-6.7 33.3-18.7 45.3l-58.5 58.5c-12 12-28.3 18.7-45.3 18.7L160 416c-35.3 0-64-28.7-64-64zM272 128c-8.8 0-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16l-32 0zm24 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-160 0C60.9 512 0 451.1 0 376L0 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 224c0 48.6 39.4 88 88 88l160 0z"
                  fill="#C7A44C" // Couleur dorée (gold)
                />
              </Svg>
              <Text style={styles.sectionTitle}>Compétences :</Text>
            </View>
            <View style={styles.horizontalLine} />
            {selectedSkills.map((skill, index) => (
              <Text key={index} style={styles.text}>{skill.name}</Text>
            ))}
          </View>
        )}

        {/* Languages Section */}
        {formData.languages.length > 0 && (
          <View style={styles.profileSection}>
            <Text style={styles.sectionTitle}>Langues parlées :</Text>
            <View style={styles.horizontalLine} />
            {formData.languages.map((language, index) => (
              <Text key={index} style={styles.listItem}>{language}</Text>
            ))}
          </View>
        )}

      {/* Questions Section */}
      <View style={styles.profileSection}>
          <View style={styles.iconAndTitle5}>
            {/* SVG Icon */}
            <Svg viewBox="0 0 576 512" style={styles.icon}>
              <Path 
                d="M48 0C21.5 0 0 21.5 0 48L0 256l144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L0 288l0 64 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L0 384l0 80c0 26.5 21.5 48 48 48l217.9 0c-6.3-10.2-9.9-22.2-9.9-35.1c0-46.9 25.8-87.8 64-109.2l0-95.9L320 48c0-26.5-21.5-48-48-48L48 0zM152 64l16 0c8.8 0 16 7.2 16 16l0 24 24 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-24 0 0 24c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-24-24 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16l24 0 0-24c0-8.8 7.2-16 16-16zM512 272a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM288 477.1c0 19.3 15.6 34.9 34.9 34.9l218.2 0c19.3 0 34.9-15.6 34.9-34.9c0-51.4-41.7-93.1-93.1-93.1l-101.8 0c-51.4 0-93.1 41.7-93.1 93.1z"
                fill="#C7A44C" // Couleur dorée (gold)
              />
            </Svg>
            <Text style={styles.sectionTitle}>Questions :</Text>
          </View>
          <View style={styles.horizontalLine} />
          <Text style={styles.boldText}>Combien d’années d’expérience dans la garde d’enfants avez-vous ?</Text>
          <Text style={styles.text}>{formData.experienceYears}</Text>

          <Text style={styles.boldText}>Avez-vous des enfants ?</Text>
          <Text style={styles.text}>{formData.hasChildren ? 'Oui' : 'Non'}</Text>
          {formData.hasChildren && (
            <>
              <Text style={styles.boldText}>Détails sur les enfants:</Text>
              <Text style={styles.text}>{formData.childrenDetails}</Text>
            </>
          )}

          <Text style={styles.boldText}>Avez-vous des allergies aux animaux ?</Text>
          <Text style={styles.text}>{formData.hasPetAllergies ? 'Oui' : 'Non'}</Text>
          {formData.hasPetAllergies && (
            <>
              <Text style={styles.boldText}>Détails des allergies:</Text>
              <Text style={styles.text}>{formData.petAllergyDetails}</Text>
            </>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default CandidatePDF;