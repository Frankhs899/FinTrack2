import { createContext, useEffect, useState, useMemo } from 'react';

export const Context = createContext();

export const GlobalProvider = ({ children }) => {
  // Estados seleccion de tema
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return storedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  // Estados para transacciones
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  // Obtener los datos del localStorage con la carga inicial
  useEffect(() => {
    try {
      const storedTransactions = localStorage.getItem('trnsactions');
      if (storedTransactions) setTransactions(JSON.parse(storedTransactions));

      const storedBalance = localStorage.getItem('balance');
      if (storedBalance) setBalance(parseFloat(storedBalance));

      const storedIncome = localStorage.getItem('income');
      if (storedIncome) setIncome(parseFloat(storedIncome));

      const storedExpense = localStorage.getItem('expense');
      if (storedExpense) setExpense(parseFloat(storedExpense));
    } catch (error) {
      console.error('Error al cargar datos desde localStorage:', error);
    }
  }, []);

  // Almacenamiento de datos al cambiar
  useEffect(() => {
    try {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    } catch (error) {
      console.error('Error al guardar transacciones en localStorage:', error);
    }
  }, [transactions]);

  useEffect(() => {
    try {
      localStorage.setItem('balance', balance.toString());
    } catch (error) {
      console.error('Error al guardar balance en localStorage:', error);
    }
  }, [balance]);

  useEffect(() => {
    try {
      localStorage.setItem('income', income.toString());
    } catch (error) {
      console.error('Error al guardar income en localStorage:', error);
    }
  }, [income]);

  useEffect(() => {
    try {
      localStorage.setItem('expense', expense.toString());
    } catch (error) {
      console.error('Error al guardar expense en localStorage:', error);
    }
  }, [expense]);

  // Manejo del tema
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = useMemo(
    () => ({
      theme,
      handleChangeTheme,
      transactions,
      balance,
      income,
      expense,
      setTransactions,
      setBalance,
      setIncome,
      setExpense,
    }),
    [theme, transactions, balance, income, expense]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
