import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InteractiveCard from '../components/InteractiveCard';

const MedicationReminders = () => {
  const [medications, setMedications] = useState([
    { medication_id: 1, name: 'Lisinopril', dosage: '10', units: 'mg', status: 'taken' },
    { medication_id: 2, name: 'Metformin', dosage: '500', units: 'mg', status: 'upcoming' },
    { medication_id: 3, name: 'Vitamin D3', dosage: '1000', units: 'iu', status: 'missed' },
  ]);

  // useEffect(() => {
  //   const fetchMedications = async () => {
  //     try {
  //       const response = await axios.get('/api/medications');
  //       setMedications(response.data);
  //     } catch (error) {
  //       console.error('Error fetching medications', error);
  //     }
  //   };
  //   fetchMedications();
  // }, []);

  const MedicationSummary = ({ med }) => (
    <div className="flex items-start gap-4">
      <div className={`text-text-light dark:text-text-dark flex items-center justify-center rounded-lg ${med.status === 'missed' ? 'bg-missed-light/20 dark:bg-missed-dark/20' : 'bg-subtle-light dark:bg-subtle-dark'} shrink-0 size-12`}>
        <span className={`material-symbols-outlined ${med.status === 'missed' ? 'text-missed-light dark:text-missed-dark' : 'text-primary'}`}>pill</span>
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <p className={`text-text-light dark:text-text-dark text-base font-medium leading-normal ${med.status === 'taken' ? 'line-through' : ''}`}>{med.name} {med.dosage}{med.units}</p>
        <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm font-normal leading-normal">After food</p>
      </div>
    </div>
  );

  const MedicationDetails = ({ med }) => (
    <div className="flex flex-col gap-2">
      <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm font-normal leading-normal">1 tablet</p>
      <div className="flex gap-2 mt-2">
        <button className="flex-1 rounded-lg bg-primary/10 py-2 text-primary text-sm font-semibold">Reschedule</button>
        <button className="flex-1 rounded-lg bg-primary/10 py-2 text-primary text-sm font-semibold">Mark as Taken</button>
      </div>
    </div>
  );


  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display" style={{'--checkbox-tick-svg': "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27%23ffffff%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')"}}>
      <header className="flex items-center bg-card-light dark:bg-card-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-subtle-light dark:border-subtle-dark">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined text-text-light dark:text-text-dark">arrow_back</span>
        </div>
        <h1 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Medication Reminders</h1>
        <div className="flex w-12 items-center justify-end">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-text-light dark:text-text-dark gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </header>
      <nav className="p-4 bg-card-light dark:bg-card-dark">
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-subtle-light dark:bg-subtle-dark px-4">
            <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Mon, 21</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-4">
            <p className="text-white text-sm font-medium leading-normal">Today</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-subtle-light dark:bg-subtle-dark px-4">
            <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Wed, 23</p>
          </div>
        </div>
      </nav>
      <main className="flex-1 px-4">
        <section>
          <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] pt-5 pb-3">Morning (8:00 AM)</h2>
          <div className="space-y-6">
            {medications.map((med) => (
              <InteractiveCard
                key={med.medication_id}
                summary={<MedicationSummary med={med} />}
                details={<MedicationDetails med={med} />}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MedicationReminders;
