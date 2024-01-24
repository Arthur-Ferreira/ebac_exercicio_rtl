import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve adicionar os novos comentários", () => {
    render(<PostComment />);

    // Encontrar o textarea e simular a digitação de um comentário
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "Primeiro Comentário" } });
    
    // Encontrar o botão de envio e simular o clique
    const button = screen.getByTestId("add-comment");
    fireEvent.click(button);
    
    // Usa o textarea já mapeado para simular a digitação de um novo comentário
    fireEvent.change(textarea, { target: { value: "Segundo Comentário" } });

    // Simular o clique
    fireEvent.click(button);

    // Verificar se os novos comentários foram adicionados à lista
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
