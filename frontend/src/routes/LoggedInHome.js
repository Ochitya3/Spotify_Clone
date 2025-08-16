import LoggedInContainer from "../containers/LoggedInContainer";

const Home = () => {
  return (
    <LoggedInContainer curActiveScreen="home">
      <PlaylistView titleText="Focus" cardsData={focusCardsData} />
      <PlaylistView titleText="Popular Artist" cardsData={artistCardsData} />
      <PlaylistView titleText="Sound of India" cardsData={focusCardsData} />
    </LoggedInContainer>
  );
};

const focusCardsData = [
  {
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces",
    imgUrl:
      "https://images.freeimages.com/images/large-previews/eaf/studying-ahead-1421056.jpg?fmt=webp&h=350",
  },
  {
    title: "Deep Focus",
    description: "Keep calm and focus with this music",
    imgUrl:
      "https://imgs.search.brave.com/YzH9pim0DRPzLe23aQNYDDM5a2i7O3JFJx86ZeJZN-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tYXJrZXRpbmct/dGFyZ2V0LWF1ZGll/bmNlLWNvbmNlcHQt/d2l0aC1mb2N1cy1j/dXN0b21lci1ncm91/cF81MDAzOS0xOTUx/LmpwZz9zaXplPTYy/NiZleHQ9anBn",
  },
  {
    title: "Instrumental Study",
    description: "Focus with soft study music in the background",
    imgUrl:
      "https://imgs.search.brave.com/SYW6XbJqMMFbOVgsG5qrHyXL38ewP9Pyf9A4y6769Og/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQz/NzY2NTYvcGhvdG8v/dmlvbGluLXdpdGgt/Ym93LW9uLXNoZWV0/LW11c2ljLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz11UFRr/UE1abFdnbXVQNVhu/UXk2T1M5TE1mMDl6/ZndpVjNRT0pmSEJE/SUk4PQ",
  },
  {
    title: "Focus Flow",
    description: "Up tempo instruction hip hop beats",
    imgUrl:
      "https://imgs.search.brave.com/aHO9OE0Zr8A2TAJhI2aFpx-F0InkhS3EgHlsa49afH4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/d29ya2luZy1mcm9t/LWhvbWUuanBnP3dp/ZHRoPTEwMDAmZm9y/bWF0PXBqcGcmZXhp/Zj0wJmlwdGM9MA",
  },
  {
    title: "Beats to think to",
    description: "Focus with drop techno and tech house",
    imgUrl:
      "https://imgs.search.brave.com/w9zRAHIOuU5yK8CEfFKBZ5TxftxEDudovfmqgVFk-D0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI5/NzAxMzI1Mi9waG90/by9tdXNpYy1wbGF5/ZXItb24tbW9iaWxl/LXBob25lLXdpdGgt/ZWFycGhvbmVzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Z/NTZhcTB1dlBlOFVU/WXRuTXpqSEJOUVky/V2pHRVJPNWlZdGEx/LVd3UVU4PQ",
  },
];

const artistCardsData = [
  {
    title: "Pritim",
    description: "Artist",
    imgUrl: "https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca",
  },
  {
    title: "Honey Singh",
    description: "Artist",
    imgUrl:
      "https://imgs.search.brave.com/wLc8e9FpxP2rU8nzYwUpBNxsHs0Kqud7sVQIjPlmu4I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTUuYm9sbHl3b29k/aHVuZ2FtYS5pbi93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/Ny82MjAtNC0xMy0z/MjJ4MzIyLmpwZw",
  },
  {
    title: "Arjit Singh",
    description: "Artist",
    imgUrl:
      "https://imgs.search.brave.com/3DjmfTg8PM5U1D_OuzdAKefMgvCo6oYRmD8juGhxXG4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtaW4uYm1zY2Ru/LmNvbS9pZWRiL2Fy/dGlzdC9pbWFnZXMv/d2Vic2l0ZS9wb3N0/ZXIvbGFyZ2UvYXJp/aml0LXNpbmdoLTEw/NDgwODMtMjQtMDMt/MjAxNy0xOC0wMi0w/MC5qcGc",
  },
  {
    title: "A.R. Rahman",
    description: "Artist",
    imgUrl:
      "https://imgs.search.brave.com/_rYzJq0XqVOLed_sleYybnIe5OuDjj6stKYkDIEetn0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/NDE0NDk5My9waG90/by9pbmRpYW4tc2lu/Z2VyLW11c2ljaWFu/LWFuZC1wcm9kdWNl/ci1hLXItcmFobWFu/LTE1dGgtYXByaWwt/MjAwMi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9MVVhb2k4/ZUltd2pwSjJ3bS1H/YklWZ2laWjBqNE1U/MDVXc0dIV1VqQjU5/WT0",
  },
  {
    title: "Udit Narayan",
    description: "Artist",
    imgUrl:
      "https://imgs.search.brave.com/5FU907cvRfiauNEEAUbFcYHcydIHo5ISpUOxqRXvMnc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hcnRp/c3RzL3c0TUtQT2Jv/amcvdzRNS1BPYm9q/Zy9zaXplX21fMTcw/OTgyNTIzMi5qcGc",
  },
];

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <div className="text-2xl font-semibold mb-5">{titleText}</div>
      <div className="w-full flex justify-between space-x-4">
        {cardsData.map((item) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              imgUrl={item.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl, srcs }) => {
  return (
    <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
      <div className="pb-4 pt-2">
        <img className="w-full rounded-md" src={imgUrl} alt="label image" />
      </div>
      <div className="text-white text-sm font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
};

export default Home;
