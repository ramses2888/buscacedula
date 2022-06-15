import React from "react";
import { render, screen } from "@testing-library/react";


import Formulario from "./formulario";


test('deberia renderizar el componente', () => {
    render(<Formulario />);
    const word = screen.getByText(/documento/i);
    expect(word).toBeInTheDocument();
}
);
