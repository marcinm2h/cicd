import { useId } from 'react';

const Input = ({ children, type = 'text', name, ...props }) => {
  const id = useId();
  return (
    <div className="mb-1">
      <label className="mr-1" htmlFor={id}>
        {children}:
      </label>
      <input
        className="border border-slate-500 rounded-sm "
        type={type}
        id={id}
        name={name}
      />
    </div>
  );
};

const Form = () => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const data = new FormData(e.target);
        const json = Array.from(data).reduce(
          (acc, [key, value]) => ({ ...acc, [key]: value }),
          {},
        );
        console.log(json);
      }}
    >
      <Input name="fname">First name</Input>
      <Input name="lname">Last name</Input>
      <Input type="email" name="email">
        E-mail
      </Input>
      <input className="border border-slate-500 rounded-sm p-1 cursor-pointer bg-sky-500/50" type="submit" />
    </form>
  );
};

const Layout = ({ children, ...props }) => {
  return (
    <div className="w-10/12 m-auto outline pl-4 pr-4 pb-4">{children}</div>
  );
};
function App() {
  return (
    <Layout>
      <div className="flex flex-row justify-center">
        <div className="p-2 bg-black text-white flex items-center text-3xl font-bold">
          Hello
        </div>
        <div className="p-2 border-4 border-black  flex items-center text-3xl font-bold">
          world!
        </div>
      </div>
      <Form />
    </Layout>
  );
}

export default App;
