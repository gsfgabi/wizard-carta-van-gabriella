import { Button } from "../Form/Button.tsx";

function Confirmation() {

    return
        <div className="h-screen flex flex-col item-center">
            <h1 className=""> Confirmar e Enviar Carta? </h1>
            <p>Esta ação é irreversível.</p>
            <Button
                label="Cancelar"
                type="button"
                className="bg-primary text-white rounded-full px-8 py-2 font-medium hover:bg-primary-dark"
            />
            <Button
                label="Confirmar e Enviar Carta"
                type="button"
                className="bg-primary text-white rounded-full px-8 py-2 font-medium hover:bg-primary-dark"
            />
        </div>
}

export default Confirmation;