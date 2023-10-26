import { clients } from "../Constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`my-4`}>
      <div className={` flex items-center justify-center flex-wrap `}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex justify-center flex-1 sm:min-w-[192px] min-w-[120px] `}
          >
            <img
              src={client.logo}
              alt="logo"
              className="sm:w-[192px] sm:h-[auto] w-[100px] object-contain feedback-card"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients
