import React from 'react';
import { Document, Font, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

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
          <Text style={styles.sectionTitle}>Profil :</Text>
          <View style={styles.horizontalLine} />
          <Text style={styles.text}>{formData.bio}</Text>
        </View>

        {/* Experience Section */}
        {formData.experiences.length > 0 && (
          <View style={styles.experienceSection}>
            <Text style={styles.sectionTitle}>Expériences professionnelles :</Text>
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
            <Text style={styles.sectionTitle}>Éducation :</Text>
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
            <Text style={styles.sectionTitle}>Compétences :</Text>
            <View style={styles.horizontalLine} />
            {selectedSkills.map((skill, index) => (
              <Text key={index} style={styles.listItem}>{skill.skill}</Text>
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

        {/* Childcare Experience and Pet Allergies */}
        <View style={styles.profileSection}>
        <Text style={styles.sectionTitle}>Questions :</Text>
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
