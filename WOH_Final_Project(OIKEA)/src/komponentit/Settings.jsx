export const Asetukset = ({ setActiveBackground }) => {
  return (
    <div className="container py-4">
      <h2>Asetukset</h2>
      <p>Vaihda taustakuva</p>
      <div className="d-flex gap-2 mb-3">
      <button className="btn btn-primary" onClick={() => setActiveBackground('https://wallpapercave.com/wp/wp7015609.png')}>
        Pikachu
      </button>
      <button className="btn btn-secondary" onClick={() => setActiveBackground('https://www.wallsnapy.com/img_gallery/fire-breating-charizard-silhouette-pokemon-pc-wallpaper-741.jpg')}>
        Charizard
      </button>
      <button className="btn btn-success" onClick={() => setActiveBackground('https://images5.alphacoders.com/561/561868.jpg')}>
        Squirtle
      </button>
      </div>
    </div>
  );
};