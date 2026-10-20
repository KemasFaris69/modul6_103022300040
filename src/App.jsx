import './index.css';
function App() {
   const jam = 9;
   const N = 15;
   const nama = "Faris";

  return (
  <>
    <body>
      <h1 className='judul'>kantin{nama}</h1>
      <p>Selamat Pagi {jam < 12 ? 'Pagi': 'Siang'}</p>
      <p>Saldo awal kartu kantin : Rp... {N * 1000}</p>

      <button disabled>Bayar</button>
    </body>

    <div>
        <panel judul></panel>
    </div>
    </>
  )
}

export default App
