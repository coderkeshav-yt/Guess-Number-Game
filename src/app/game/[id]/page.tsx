import GameComponent from "./GameComponent";

// Generate static params for static export
export async function generateStaticParams() {
  // Generate static paths for common game levels
  const levels = [3, 5, 7]; // You can add more levels as needed
  
  return levels.map((level) => ({
    id: level.toString(),
  }));
}

type Props = {
  params: { id: string };
};

const Page = ({ params: { id } }: Props) => {
  return <GameComponent id={id} />;
};

export default Page;
