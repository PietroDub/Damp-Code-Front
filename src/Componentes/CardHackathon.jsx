const CardHackathon = ({ hackathon }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${hackathon.logo})`
      }}
      className="
        w-2/3
        lg:w-1/5
        h-70
        flex
        flex-col
        text-center
        rounded-xl
        items-center
        justify-center
        relative
        bg-no-repeat
        bg-cover
        bg-center
      "
    >
      <h1 className="text-texto text-2xl">
        <b>{hackathon.titulo}</b>
      </h1>

      <h2 className="text-texto">
        {hackathon.empresa}
      </h2>

      <div className="absolute rounded-b-xl py-2 gap-x-5 bg-texto w-full items-center justify-center bottom-0 flex">

        <div className="flex flex-col text-center">
          <h1 className="text-black text-xl">
            <b>{hackathon.tecnologias?.length || 0}</b>
          </h1>

          <h3 className="text-texto-secundario">
            <b>Techs</b>
          </h3>
        </div>

        <div className="flex flex-col text-center">
          <h1 className="text-black text-xl">
            <b>R$ {hackathon.premiacao}</b>
          </h1>

          <h3 className="text-texto-secundario">
            <b>Prêmio</b>
          </h3>
        </div>

      </div>
    </div>
  )
}

export default CardHackathon