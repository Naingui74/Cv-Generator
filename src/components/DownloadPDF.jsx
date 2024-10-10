import { PDFDownloadLink } from "@react-pdf/renderer";
import CandidatePDF from "./CandidatePDF";
import { Button } from "@mui/material";

const DownloadPDF = ({ formData }) => (
    <PDFDownloadLink
        document={<CandidatePDF formData={formData} />}
        fileName="candidate_cv.pdf"
        onClick={e => e.preventDefault()}
    >
        {({ blob, url, loading, error }) => (
            <Button
                variant="contained"
                color="primary"
                disabled={loading || !!error}
                onClick={e => {
                    if (loading || error) {
                        e.preventDefault();
                    }
                    window.open(url, "_blank");
                }}
                style={{
                    marginTop: '20px',
                    backgroundColor: '#C7A44C',
                    width: '200px',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    height: '50px',
                    fontfamily: 'Arial',
                    fontSize: '18px',
                }}
            >
                {loading ? "Loading document..." : "Download PDF"}
            </Button>
        )}
    </PDFDownloadLink>
);

export default DownloadPDF;