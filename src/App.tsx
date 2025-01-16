import React from 'react';
import Button from './components/Button'; 
import { FaClinicMedical, FaHandHoldingMedical } from 'react-icons/fa'; 

const App: React.FC = () => {
  return (
    <div style={{ padding: '30px' }}>
      <h3 className="text-center">Selamat Datang di RS Annisa</h3>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Button
          label=" POLI UMUM"
          icon={FaClinicMedical}
          iconPosition="left"
          size="medium"
          variant="left" 
          tooltip="Klik untuk berobat ke dokter umum"
          tooltipPosition="bottom"
          onClick={() => alert('Anda memilih poli umum')}
        />
        <Button
          label=" POLI KHUSUS"
          icon={FaHandHoldingMedical}
          iconPosition="left" 
          size="medium"
          variant="right" 
          tooltip="Klik untuk berobat ke dokter spesialis"
          tooltipPosition="bottom"
          onClick={() => alert('Anda memilih poli khusus')}
        />
      </div>
    </div>
  );
};

export default App;