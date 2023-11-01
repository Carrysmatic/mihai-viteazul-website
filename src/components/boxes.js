const ThreeBoxes = () => {
  return (
    <div className="flex justify-center bg-blue-500 text-white h-350px">
      <div className="w-1/3 p-12">
        <h2 className="text-2xl font-bold text-center mb-8">Box 1</h2>
        <p className="m-2">
        Documentele vremii arată că istoria şcolii începe în anul 1867, ca şcoala de stat, sub numele de Şcoala de băieţi nr. 2. La început a funcţionat în mai multe locaţii închiriate, iar din 1886 are local propriu în Bulevardul Carol nr.73.

Din anul şcolar 1948-1949 se introduce ciclul II (clasele V-VII), iar instituţia devine Şcoala de 7 ani de baieţi nr.2, apoi, în 1954, primeşte numele de Şcoala nr. 8.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold mt-8 py-2 px-4 rounded">
            Find more
          </button>
        </div>
      </div>
      <div className="w-1/3 p-12 bg-blue-700">
        <h2 className="text-2xl font-bold text-center text-white mb-8">Box 2</h2>
        <p className="m-2 text-white">
          Sample text for Box 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold mt-8 py-2 px-4 rounded">
            Find more
          </button>
        </div>
      </div>
      <div className="w-1/3 p-12">
        <h2 className="text-2xl font-bold text-center mb-8">Box 3</h2>
        <p className="m-2">
          Sample text for Box 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold mt-8 py-2 px-4 rounded">
            Find more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreeBoxes;
