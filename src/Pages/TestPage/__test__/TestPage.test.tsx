import React from "react";
import { render, screen } from '@testing-library/react';
import TestPage from '../TestPage';

describe('TestPage Componen', ()=>{
    test('se renderiza el titulo del componente',()=>{
        render(<TestPage/>);
        const title = screen.getByText('TestPage')
        expect(title).toBeInTheDocument()
    })
})

// describe('<TestPage />', () => {
//   it('debería mostrar el resultado de la prueba del backend', async () => {
//     // Configura una respuesta simulada para la llamada a la API
//     mock.onGet('http://localhost:5005/api/test').reply(200, 'Test from Backend WORKING');

//     render(<TestPage />);

//     // Encuentra el botón por su texto y haz clic en él
//     const button = screen.getByText('Test Backend Conection');
//     fireEvent.click(button);

//     // Espera a que aparezca la respuesta en la pantalla
//     const response = await screen.findByText('Test from Backend WORKING');
//     expect(response).toBeInTheDocument();
//   });
// });
