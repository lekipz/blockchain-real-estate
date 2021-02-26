import { useRealEstates } from '../real-estates';

export default function HomePage() {
  const realEstates = useRealEstates();
  console.log(realEstates);

  return (
    <div>
      This is the homepage.
    </div>
  );
}
