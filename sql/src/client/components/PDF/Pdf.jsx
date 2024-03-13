/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Page, Document, Text,Image,View ,StyleSheet} from '@react-pdf/renderer';
import { PDFViewer, Font } from '@react-pdf/renderer';
import './fonts.css';





    
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

const PdfContent = ({ text,createPdf,pdfCount,pdfDate,pdfObject,pdfChannels }) => {




  return (
    <Document>
 <Page size="A4" style={styles.page}>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>{pdfCount}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{pdfObject}</Text>
            </View>
            {/* <View style={styles.tableCell}>
              <Text>{createPdf}</Text>
            </View> */}
            <View style={styles.tableCell}>
              <Text>{pdfChannels}</Text>
            </View>
       
            <View style={styles.tableCell}>
              <Text> {pdfDate}</Text>
            </View>
          </View>
          <View style={styles.answerContainer}>
          <Text style={styles.text}>{createPdf}</Text></View>

          {/* Table Body */}
     
        </View>
      </Page>
    </Document>
  );
};

export default PdfContent;
