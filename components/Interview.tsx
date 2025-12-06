import React, { useRef } from 'react';

interface Props {
  // Add your props here
}

const Interview: React.FC<Props> = () => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleButtonClick = () => {
    const modal = modalRef.current;
    if (modal !== null) {
      modal.style.display = 'block';
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (form !== null) {
      const isValid = form.checkValidity();
      if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
      } else {
        alert('Invalid form data!');
      }
    }
  };

  const handleCloseModal = () => {
    const modal = modalRef.current;
    if (modal !== null) {
      modal.style.display = 'none';
    }
  };

  return (
    <div>
      <h1>Interview Component</h1>
      <button onClick={handleButtonClick}>Open Modal</button>
      <div ref={modalRef}>
        <h2>Modal Content</h2>
        <form onSubmit={handleFormSubmit} ref={formRef}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
          <button type="submit">Submit</button>
        </form>
        <button onClick={handleCloseModal}>Close Modal</button>
      </div>
    </div>
  );
};

export default Interview;
