import Track from '../Track';
import { trackData } from '../../constants/trackData';
import LandingLayout from '../layout/LandingLayout';
import Button from '../Button';

const SubjectSection = () => {
  return (
    <LandingLayout>
      <div className="text-3xl font-extrabold text-primary">Subjects</div>
      <div className="w-[524px] text-center text-lg font-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
        tempor incididunt ut
      </div>
      <div className="flex gap-4">
        <Button>Data Science</Button>
        <Button>Core Science</Button>
        <Button>Game Development</Button>
      </div>
      <div className="mt-8 flex gap-9">
        {trackData.map((data, index) => (
          <Track
            key={index}
            src={data.src}
            alt={data.alt}
            title={data.title}
            body={data.body}
          />
        ))}
      </div>
    </LandingLayout>
  );
};

export default SubjectSection;
