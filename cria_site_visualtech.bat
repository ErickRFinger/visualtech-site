@echo off

REM Instala o Vite globalmente
npm install -g create-vite

REM Cria o projeto React com Vite
echo Criando o projeto visualtech-site...
create-vite visualtech-site --template react

REM Entra na pasta do projeto
cd visualtech-site

REM Instala as dependências
echo Instalando dependências...
npm install

echo.
echo Projeto criado com sucesso!
echo Para rodar o projeto, execute os comandos abaixo:
echo cd visualtech-site

echo npm run dev

echo.
pause 