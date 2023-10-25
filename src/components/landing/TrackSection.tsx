import Track from '../Track';
import { trackData } from '../../constants/trackData';
import LandingLayout from '../layout/LandingLayout';

const TrackSection = () => {
  return (
    <LandingLayout>
      <div className="text-3xl font-extrabold text-primary">Tracks</div>
      <div className="mt-8 flex gap-9">
        {trackData.map((data, index) => (
          <Track
            key={index}
            src={data.src}
            alt={data.alt}
            title={data.title}
            body={data.body}
          />
        ))}{' '}
      </div>
    </LandingLayout>
  );
};

export default TrackSection;
