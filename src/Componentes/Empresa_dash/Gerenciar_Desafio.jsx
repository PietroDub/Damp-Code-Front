import React , {useEffect, useState} from 'react'

const Gerenciar_Desafio = () => {
  
  const [hackathons, setHackathons] = useState([])
  
  async function fetchHackathons() {
  try {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    const response = await fetch(
      "https://localhost:7092/api/Hackathons"
    );

    const data = await response.json();

    const hackathonsEmpresa = data.filter(
      h => h.empresa === user.name
    );

    setHackathons(hackathonsEmpresa);

  } catch (error) {
    console.error(error);
  }

}
useEffect(() => {
fetchHackathons();
}, []);

  // const hackathons = [
  //   {
  //     hackathonId: 1,
  //     titulo: "Bahhh",
  //     status: "Ativo",
  //     DataFinal: "2026-05-30T03:00:00.000+00:00"
  //   },
  //   {
  //     hackathonId: 2,
  //     titulo: "Bahhh2",
  //     status: "Ativo",
  //     DataFinal: "2026-05-30T03:00:00.000+00:00"
  //   },
  //   {
  //     hackathonId: 3,
  //     titulo: "Bahhh3",
  //     status: "Ativo",
  //     DataFinal: "2026-05-30T03:00:00.000+00:00"
  //   }
  // ]
  
  return (
<div className="min-h-screen bg-[#170A36] p-8 text-texto w-9/10">
      <div className="overflow-x-auto rounded-2xl border border-[#30363d] bg-[#22114D] shadow-lg">
        
        <table className="w-full border-collapse">
          
          <thead className="bg-[#170A36] text-[#FFEA00]">
            <tr className="text-left text-sm uppercase tracking-wider">
              <th className="px-6 py-4">Nome</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Participantes</th>
              <th className="px-6 py-4">Data Final</th>
              <th className="px-6 py-4">Ações</th>
            </tr>
          </thead>

          <tbody>
            {hackathons.map((hackathon) =>(
            <tr key={hackathon.hackathonId} className="border-t border-[#30363d] transition hover:bg-[#2a1761]">
              
              <td className="px-6 py-5 font-medium">
                {hackathon.titulo}
              </td>
              <td className="px-6 py-5">
  <span
    className={`rounded-full px-3 py-1 text-sm font-semibold ${
      hackathon.status
        ? "bg-[#3fb950]/20 text-[#3fb950]"
        : "bg-red-500/20 text-red-400"
    }`}
  >
    {hackathon.status ? "Ativo" : "Inativo"}
  </span>
</td>

<td className="px-6 py-5 text-[#8b949e]">
  100
</td>

<td className="px-6 py-5 text-[#8b949e]">
  {new Date(hackathon.dataFinal).toLocaleDateString("pt-BR")}
</td>
              <td className="px-6 py-5">
                <div className="flex flex-wrap gap-2">
                  
                  <button className="rounded-lg bg-[#ef4444]/20 px-4 py-2 text-sm font-medium text-[#ef4444] transition hover:bg-[#ef4444] hover:text-white">
                    Delete
                  </button>

                  <button className="rounded-lg bg-[#facc15]/20 px-4 py-2 text-sm font-medium text-[#facc15] transition hover:bg-[#facc15] hover:text-black">
                    Edit
                  </button>

                  <button className="rounded-lg bg-[#6C48C5]/20 px-4 py-2 text-sm font-medium text-[#C68FE6] transition hover:bg-[#6C48C5] hover:text-white">
                    Detalhes
                  </button>
                </div>
              </td>
            </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  )
}

export default Gerenciar_Desafio