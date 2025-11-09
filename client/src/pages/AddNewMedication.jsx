import React, { useState } from 'react';
import axios from 'axios';
import PrimaryButton from '../components/PrimaryButton';

const AddNewMedication = () => {
  const [medicationName, setMedicationName] = useState('');
  const [dosage, setDosage] = useState('');
  const [units, setUnits] = useState('');
  const [frequency, setFrequency] = useState('Daily');
  const [reminders, setReminders] = useState(['08:00 AM', '09:00 PM']);

  const handleAddReminder = () => {
    // In a real app, you'd open a time picker
    const newReminder = prompt('Enter a new reminder time (e.g., 10:00 AM)');
    if (newReminder) {
      setReminders([...reminders, newReminder]);
    }
  };

  const handleRemoveReminder = (index) => {
    const newReminders = reminders.filter((_, i) => i !== index);
    setReminders(newReminders);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/medications', {
        name: medicationName,
        dosage,
        units,
        frequency,
        reminders,
      });
      console.log('Medication added', response.data);
      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error adding medication', error);
      // Handle error
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display">
      <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b border-border-light/80 bg-background-light/80 px-4 backdrop-blur-sm dark:border-border-dark/80 dark:bg-background-dark/80">
        <button className="flex h-10 w-10 items-center justify-center text-text-light dark:text-text-dark">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold text-text-light dark:text-text-dark">Add New Medication</h1>
        <div className="w-10"></div>
      </header>
      <main className="flex-grow px-4 pb-28 pt-6">
        <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6">
          <section className="space-y-4">
            <label className="flex flex-col">
              <p className="pb-2 text-base font-medium text-text-light dark:text-text-dark">Medication Name</p>
              <input
                className="form-input h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-component-bg-light p-4 text-base font-normal leading-normal text-text-light placeholder:text-secondary-text-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-component-bg-dark dark:text-text-dark dark:placeholder:text-secondary-text-dark"
                placeholder="e.g., Ibuprofen"
                type="text"
                value={medicationName}
                onChange={(e) => setMedicationName(e.target.value)}
              />
            </label>
            <div className="flex flex-wrap items-end gap-4">
              <label className="flex min-w-40 flex-1 flex-col">
                <p className="pb-2 text-base font-medium text-text-light dark:text-text-dark">Dosage</p>
                <input
                  className="form-input h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-component-bg-light p-4 text-base font-normal leading-normal text-text-light placeholder:text-secondary-text-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-component-bg-dark dark:text-text-dark dark:placeholder:text-secondary-text-dark"
                  placeholder="e.g., 500"
                  type="number"
                  value={dosage}
                  onChange={(e) => setDosage(e.target.value)}
                />
              </label>
              <label className="flex min-w-20 flex-1 flex-col">
                <p className="pb-2 text-base font-medium text-text-light dark:text-text-dark">Units</p>
                <input
                  className="form-input h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-component-bg-light p-4 text-base font-normal leading-normal text-text-light placeholder:text-secondary-text-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-component-bg-dark dark:text-text-dark dark:placeholder:text-secondary-text-dark"
                  placeholder="mg"
                  type="text"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                />
              </label>
            </div>
          </section>
          <section className="space-y-4 pt-4">
            <h2 className="text-lg font-bold text-text-light dark:text-text-dark">Schedule</h2>
            <div>
              <p className="pb-2 text-base font-medium text-text-light dark:text-text-dark">Frequency</p>
              <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-component-subtle-bg-light p-1 dark:bg-component-subtle-bg-dark">
                {['Daily', 'Weekly', 'As Needed'].map((freq) => (
                  <label
                    key={freq}
                    className="flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-md px-2 text-sm font-medium leading-normal text-secondary-text-light has-[:checked]:bg-component-bg-light has-[:checked]:text-text-light has-[:checked]:shadow-sm dark:text-secondary-text-dark dark:has-[:checked]:bg-component-bg-dark dark:has-[:checked]:text-text-dark"
                  >
                    <span className="truncate">{freq}</span>
                    <input
                      checked={frequency === freq}
                      className="invisible w-0"
                      name="frequency"
                      type="radio"
                      value={freq}
                      onChange={(e) => setFrequency(e.target.value)}
                    />
                  </label>
                ))}
              </div>
            </div>
            <div>
              <p className="pb-2 text-base font-medium text-text-light dark:text-text-dark">Reminders</p>
              <div className="space-y-3">
                {reminders.map((time, index) => (
                  <div key={index} className="flex h-14 items-center justify-between rounded-lg bg-component-bg-light p-4 dark:bg-component-bg-dark">
                    <span className="text-lg font-semibold text-text-light dark:text-text-dark">{time}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveReminder(index)}
                      className="flex h-8 w-8 items-center justify-center text-secondary-text-light dark:text-secondary-text-dark"
                    >
                      <span className="material-symbols-outlined text-xl">close</span>
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddReminder}
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border-light bg-transparent py-3 text-base font-semibold text-primary transition-colors hover:bg-primary/10 dark:border-border-dark"
                >
                  <span className="material-symbols-outlined">add_circle</span>
                  Add Reminder
                </button>
              </div>
            </div>
          </section>
        </form>
      </main>
      <footer className="fixed bottom-0 left-0 z-10 w-full border-t border-border-light/80 bg-background-light/80 p-4 backdrop-blur-sm dark:border-border-dark/80 dark:bg-background-dark/80">
        <div className="mx-auto max-w-md">
          <PrimaryButton type="submit" onClick={handleSubmit} icon="save">
            Save Medication
          </PrimaryButton>
        </div>
      </footer>
    </div>
  );
};

export default AddNewMedication;
