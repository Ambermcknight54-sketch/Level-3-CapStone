import { Fragment, useState } from "react";
import { useInputTWE } from "../hooks/useInputTWE";
import { usePrisma } from "../hooks/usePrisma";
import { useLogin } from "../hooks/useLogin";
import { DbPassword } from "../components/DbPassword";
import { Authentication } from "../components/Authentication";

export function WebClient() {
  useInputTWE();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState();
  const [data, setData] = useState([]);

  const prisma = usePrisma(password);
  const user = useLogin(prisma, login);

  return (
    <main>
      <DbPassword setPassword={setPassword} />
      <Authentication setLogin={setLogin} user={user} />
      {/* <Create prisma={prisma} setData={setData} /> */}
      <output>
        <dl>{data.map(toDetails)}</dl>
      </output>
    </main>
  );
}

function toDetails(item, index) {
  const key = index + item.name;
  return (
    <Fragment key={key}>
      <dt>{item.name}</dt>
      <dd>
        <img src={item.src} alt={item.name} />
        {item.price}
      </dd>
    </Fragment>
  );
}

// function componentDidUpdate() {
//   if (password) {
//     handleData();
//   }
// }

// async function handleData() {
//   const client = await createWebClient({
//     jsonSchema: schema,
//     datasourceUrl: `postgresql://postgres.lajdxfozfpkirmfudjce:${password}@aws-1-us-east-2.pooler.supabase.com:5432/postgres`,
//   });
//   setPrisma(client);
//   const results = await client.products.findMany();
//   setData(results);
// }
