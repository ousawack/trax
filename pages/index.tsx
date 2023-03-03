import GradientLayout from "../components/gradientLayout";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  return (
    <GradientLayout
      color={"green"}
      image={
        "https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
      }
      subtitle={"profile"}
      title={"Ousama Ajebbar"}
      description={"15 public playlists"}
      roundImage
    >
      <div>home page</div>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  console.log(artists)

  return {
    props: { artists },
  };
};

export default Home;
