import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve adicionar o primeiro comentário", () => {
    render(<Post />);

    // Encontrar o textarea e simular a digitação de um comentário
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "Primeiro Comentário" } });

    // Encontrar o botão de envio e simular o clique
    const button = screen.getByTestId("add-comment");
    fireEvent.click(button);

    // Verificar se o novo comentário foi adicionado à lista
    expect(screen.getByText("Primeiro Comentário")).toBeInTheDocument();
  });

  it("Deve adicionar o segundo comentário", () => {
    render(<Post />);

    // Encontrar o textarea e simular a digitação de um comentário
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "Segundo Comentário" } });

    // Encontrar o botão de envio e simular o clique
    const button = screen.getByTestId("add-comment");
    fireEvent.click(button);

    // Verificar se o novo comentário foi adicionado à lista
    expect(screen.getByText("Segundo Comentário")).toBeInTheDocument();
  });
});
