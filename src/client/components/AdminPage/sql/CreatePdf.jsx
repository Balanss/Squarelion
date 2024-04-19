import { Page, Document, Text, View, StyleSheet, PDFDownloadLink, pdf } from '@react-pdf/renderer';

import { useState } from 'react';

export default function CreatePdf({ data }) {
 


  
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
        // paddingBottom:'20px',
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
          paddingBottom:'10px'
        },
    });

  const MyDoc = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Name</Text>
            <Text style={styles.tableCell}>Day</Text>
            <Text style={styles.tableCell}>type</Text>
          </View>
          {Object.values(data).map(user => (
            <View style={styles.tableRow} key={user.id}>
              <Text style={styles.tableCell}>{user.user}</Text>
              <Text style={styles.tableCell}>{user.month}/{user.day}</Text>
              <Text style={styles.tableCell}>{user.type}</Text>
            </View>
          ))}
          
        </View>
      </Page>
    </Document>
  );



  return (
    <>
      <td className="px-2 py-4 phones:px-1">
       
        <PDFDownloadLink document={MyDoc} fileName="report.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download'
          }
        </PDFDownloadLink>
      </td>
    </>
  );
}