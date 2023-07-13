


/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Page, Document, Text,Image,View ,StyleSheet,PDFViewer,Font} from '@react-pdf/renderer';
import Logo from '../images/logo.png';



 export default function WholePage({filter}) {
      const styles = StyleSheet.create({

        text: {
         
          fontSize: 20,
        },
        page: {
        
          fontSize: 12,
          padding: 20,
        
          
        },
        imageContainer: {
            marginBottom: 10,
          },
        table: {
          display: 'table',
          width: '100%',
          // borderStyle: 'solid',
          borderWidth: 1,
          borderColor: '#000',
          marginBottom: '20px', 
           padding: '20px',
          paddingBottom:'20px',
          marginTop:10,
          borderLeftStyle:'solid',
          borderRightStyle:'solid',
        
          // height:'100%'
        },
        tableRow: {
          margin: 'auto',
          flexDirection: 'row',
          marginTop:10,
          marginBottom:'20px'
        },
        tableCell: {
         
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: '#000',
          padding: 5,
          textAlign: 'center',
          marginTop:10
        },

        tbCell:{
          width: 'auto',
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
         image: {
      width: '200px',
      height: '200px',
    }, brand:{
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
       });





return (

        <Document>
          {filter.map((item, index) => (
            <Page key={index} size="A4" style={styles.page}>
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>{item.count}</Text>
                  <Text style={styles.tableCell}>{item.objective}</Text>
                  <Text style={styles.tableCell}>{item.type}</Text>
                  <Text style={styles.tableCell}>{item.date}</Text>
                </View>
                <Text>{item.answer} 
               

                </Text>
                
                
              </View>
              {/* <View style={styles.tbCell}>       <Text>{item.answer}</Text> </View>  */}
        
              <View style={styles.brand}> 
            <Image src={Logo} style={styles.image} />
            </View>
            </Page>
          ))}
        </Document> 
      );




}
