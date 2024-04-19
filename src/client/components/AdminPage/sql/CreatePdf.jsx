


import { Page, Document, Text,Image,View ,StyleSheet} from '@react-pdf/renderer';


export default function CreatePdf({userName}) {

  

    const styles = StyleSheet.create({

        text: {
          fontSize: 16,
        },
      
          page: {
            fontSize: 12,
            padding: 20,
          },
          table: {
            display: 'table',
            width: '100%',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#000',
            marginBottom: 10,
            marginTop:10
          },
          tableRow: {
            margin: 'auto',
            flexDirection: 'row',
            marginTop:10
          },
          tableCell: {
          
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#000',
            padding: 5,
            textAlign: 'center',
            paddingBottom:'20px',
            marginTop:10
          },
          answerContainer: {
              marginTop: 20,
              marginBottom: 20,
              paddingBottom:'20px'
            },
            answerLabel: {
              fontWeight: 'bold',
              textAlign: 'center',
              paddingBottom:'20px'
            },
            answerText: {
              marginTop: 5,
              textAlign: 'center',
              paddingBottom:'20px'
            },
        });

        

    const handleDownload = () => {
        const doc = (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCell}>Name</Text>
                            <Text style={styles.tableCell}>Date</Text>
                            <Text style={styles.tableCell}>Type</Text>
                            <Text style={styles.tableCell}>Status</Text>
                        </View>
                        {data.map((x, i) => {
                            return (
                                <View key={i} style={styles.tableRow}>
                                    <Text style={styles.tableCell}>{x[0]}</Text>
                                    <Text style={styles.tableCell}>{x[1]}</Text>
                                    <Text style={styles.tableCell}>{x[2]}</Text>
                                    <Text style={styles.tableCell}>{x[3]}</Text>
                                </View>
                            );
                        })}
                    </View>
                </Page>
            </Document>
        );
        const pdfBlob = pdf(doc).toBlob();
        pdfBlob.then((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'report.pdf';
            a.click();
        });
    }
 
console.log(userName)


return (
    <>
  
    <td className="px-2 py-4 phones:px-1" onClick={() => handleDownload()}>
         download
    </td>
    </>
)
}