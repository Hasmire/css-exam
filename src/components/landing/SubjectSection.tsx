import LandingLayout from '../layout/LandingLayout';
import { useState } from 'react';
import { subjectData } from '../../constants/subjectData';
import Subjects from '../Subjects';
import SubjectsButton from '../SubjectButtons';

const SubjectSection = () => {
  const [currentSpecialization, setCurrentSpecialization] = useState(
    subjectData['Data Science'],
  );

  const handleSubjectChange = (specialization: string) => {
    setCurrentSpecialization(subjectData[specialization]);
  };

  return (
    <LandingLayout>
      <div className="text-3xl font-extrabold text-primary">Subjects</div>
      <div className="mt-2 w-3/4 text-center font-medium md:w-2/5 md:text-lg">
        Discover data science, core computer science, and game development
        tracks, each offering a unique dive into the world of technology and
        digital innovation
      </div>
      <SubjectsButton
        activeSpecialization={currentSpecialization}
        onClick={handleSubjectChange}
      />
      <div className="mt-8 grid grid-cols-1 justify-items-center gap-9 sm:grid-cols-2 md:grid-cols-3">
        {currentSpecialization.map((data, index) => (
          <Subjects
            key={index}
            src={data.src}
            alt={data.alt}
            code={data.code}
            title={data.title}
          />
        ))}
      </div>
    </LandingLayout>
  );
};

export default SubjectSection;
