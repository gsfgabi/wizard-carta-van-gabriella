import React from 'react';
import Button from "../Button/Button";

function Confirmation() {

    return
        <div className="h-screen flex flex-col item-center">
            <h1 className=""> Confirmar e Enviar Carta? </h1>
            <p>Esta ação é irreversível.</p>
            <div className="flex justify-end gap-4 mt-6">
                <Button
                    type="button"
                    className="border-2 border-[#8D44AD] text-[#8D44AD] bg-white rounded-full px-10 py-2 font-semibold transition hover:bg-[#f3eaff] hover:text-[#8D44AD] disabled:opacity-50 shadow-none"
                    onClick={onCancel}
                >
                    Cancelar
                </Button>
                <Button
                    type="button"
                    className="bg-[#8D44AD] text-white rounded-full px-10 py-2 font-semibold shadow-none hover:bg-[#7d379c] transition disabled:opacity-50"
                    onClick={onConfirm}
                >
                    Confirmar
                </Button>
            </div>
        </div>
}

export default Confirmation;