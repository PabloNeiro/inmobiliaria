const getHome = async () => {
  const response = await fetch(
    "https://hub-inmobiliaria.netlify.app/inmuebles.json"
  );
  const home = await response.json();
  return home;
};

export default getHome;
