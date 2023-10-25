import { Subject, subjectData } from '../constants/subjectData';
import Button from './Button';

type Props = {
  onClick: (specialization: string) => void;
  activeSpecialization: Subject[];
};

const SubjectsButton = (props: Props) => {
  const { activeSpecialization, onClick } = props;

  const getActiveClass = (specialization: string) =>
    activeSpecialization === subjectData[specialization]
      ? 'bg-accent-orange'
      : '';

  return (
    <div className="mt-8 flex gap-4">
      <Button
        className={getActiveClass('Data Science')}
        onClick={() => onClick('Data Science')}
      >
        Data Science
      </Button>
      <Button
        className={getActiveClass('Core Science')}
        onClick={() => onClick('Core Science')}
      >
        Core Science
      </Button>
      <Button
        className={getActiveClass('Game Development')}
        onClick={() => onClick('Game Development')}
      >
        Game Development
      </Button>
    </div>
  );
};

export default SubjectsButton;
