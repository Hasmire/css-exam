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
      <div className="mt-2 w-[524px] text-center text-lg font-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
        tempor incididunt ut
      </div>
      <SubjectsButton
        activeSpecialization={currentSpecialization}
        onClick={handleSubjectChange}
      />
      <div className="mt-8 grid grid-cols-3 justify-items-center gap-9">
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
