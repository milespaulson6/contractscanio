import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="5" lg="4" xl="3" className='mx-auto mb-5'>
              <h6 className='text-uppercase fw-bold mb-4'>
                About Contractscan.io
              </h6>
              <p>
                We're here to help make understanding legal documents easy. Whether it be an employment offer 
                or a loan agreement, Contractscan.io helps you quickly extract the most important information 
                from these documents and have confidence in signing your name.
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>The Team</h6>
              <p>
                Contractscan.io was built by Miles Paulson, Grayson Fattaleh, and Rheanna Brown as
                a capstone project for their Master in Information Systems Management.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: Contractscan.io
      </div>
    </MDBFooter>
  );
}