import { Page, Document, Text, View, StyleSheet, PDFDownloadLink, pdf } from '@react-pdf/renderer';

import { useState } from 'react';

export default function CreatePdf({ data,modalIsOpen,setModalIsOpen,userName }) {
 

  const [selectedMonth, setSelectedMonth] = useState('');


  const handleMonthChange = (event) => {
    const month = Number(event.target.value.split('-')[1]);
    setSelectedMonth(month);
    
  };
  
  const filteredData = Object.values(data).filter(user => user.month === selectedMonth);
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
          {Object.values(filteredData).map(user => (
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
      <td className="border-2 px-2 py-4 phones:px-1 flex  phones:flex-col gap-5  text-black fixed  rounded  top-12 right-0 justify-center items-start bg-white z-[100000000]">
      <span className='flex flex-col items-start'>
      <label htmlFor='month'>Select month</label>
        <input type='month' className='border-2 border-gray-400 rounded' onChange={handleMonthChange}/>
      </span>

      {selectedMonth !== '' && <span className='font-bold underline hover:scale-[1.1]'>
           <PDFDownloadLink document={MyDoc} fileName="worklog.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : `Download now ${userName}.pdf`
          }
        </PDFDownloadLink>
      </span>}
   
        <button className='bg-red-600 py-3 px-4 rounded text-white hover:scale-[1.1]' onClick={() => setModalIsOpen(!modalIsOpen)}>Close</button>
      </td>
    </>
  );
}