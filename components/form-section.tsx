"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";

// --- Funções Auxiliares ---

const cleanPhoneNumber = (value: string) => {
  return value.replace(/\D/g, '');
};

const formatPhoneNumber = (value: string) => {
  const cleaned = cleanPhoneNumber(value);

  if (cleaned.length > 2) {
    let formatted = `(${cleaned.substring(0, 2)}) `;

    if (cleaned.length <= 6) {
      formatted += cleaned.substring(2);
    } else if (cleaned.length > 6 && cleaned.length <= 10) {
      formatted += `${cleaned.substring(2, 6)}-${cleaned.substring(6)}`;
    } else if (cleaned.length >= 11) {
      formatted += `${cleaned.substring(2, 7)}-${cleaned.substring(7, 11)}`;
    }
    return formatted; 

  } else if (cleaned.length > 0) {
    return `(${cleaned.substring(0, 2)}`;
  }

  return cleaned;
};

// --- Tipagem (Resolvendo o Erro de Compilação) ---

// A interface deve vir antes do componente que a utiliza.
type FormInputProps = {
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isInvalid?: boolean;
};

// --- Componente FormInput ---

// Agora o TypeScript conhece o tipo FormInputProps e não dá o erro 'any' implícito.
const FormInput = ({ id, type = "text", placeholder, value, onChange, isInvalid = false }: FormInputProps) => (
  <div>
    <label htmlFor={id} className="sr-only">
      {placeholder}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full bg-white/10 text-white placeholder-slate-400 rounded-lg p-3 border ${
        isInvalid ? 'border-red-500 focus:ring-red-500' : 'border-slate-600 focus:ring-[#FE4634]'
      } focus:outline-none focus:ring-2 transition-all`}
    />
  </div>
);

// --- Componente Principal (FormSection) ---

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxJDvVn5N1WYK0cTO9ToPGlzXpTgCPAAk5MVssKwtC4m2DlGnT4VW2kwJpOYl1CjupnkQ/exec";

function FormSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState("");

  const [formData, setFormData] = React.useState({
    nome: '',
    telefone: '',
    negocio: '',
  });

  const [errors, setErrors] = React.useState({
    telefone: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    let newValue = value;

    if (name === 'telefone') {
      newValue = formatPhoneNumber(value);

      if (errors.telefone) {
        setErrors(prev => ({ ...prev, telefone: false }));
      }
    }

    setFormData(prev => ({ ...prev, [name]: newValue }));
  };

  const validateForm = () => {
    const cleanedPhone = cleanPhoneNumber(formData.telefone);
    let isValid = true;

    // Garante que o campo nome e negócio não estejam vazios (adicionado verificação básica)
    if (formData.nome.trim() === '' || formData.negocio.trim() === '') {
        isValid = false;
        // Poderia adicionar erros visuais para nome/negocio aqui, se necessário.
    }

    // Validação do telefone
    if (cleanedPhone.length !== 10 && cleanedPhone.length !== 11) {
      setErrors(prev => ({ ...prev, telefone: true }));
      isValid = false;
    } else {
      setErrors(prev => ({ ...prev, telefone: false }));
    }

    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      setSubmissionStatus('error_validation');
      // Reseta o status de erro após um tempo, se não for erro de validação de telefone (já está visível)
      if (errors.telefone) {
          return;
      }
      setTimeout(() => setSubmissionStatus(""), 5000);
      return; 
    }

    setIsSubmitting(true);
    setSubmissionStatus("");

    const params = new URLSearchParams();
    params.append('nome', formData.nome);
    params.append('telefone', cleanPhoneNumber(formData.telefone));
    params.append('negocio', formData.negocio);

    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.result === 'success') {
            setSubmissionStatus('success');
            setFormData({ nome: '', telefone: '', negocio: '' }); // Limpa o formulário
        } else {
            setSubmissionStatus('error');
            console.error('Erro no Apps Script:', result.message);
        }
      } else {
        setSubmissionStatus('error');
        console.error('Erro na requisição:', response.statusText);
      }

    } catch (error) {
      setSubmissionStatus('error');
      console.error('Erro ao enviar o formulário:', error);
    } finally {
      setIsSubmitting(false);
      // Limpa a mensagem de status após alguns segundos (exceto sucesso, que limpa o form)
      if (submissionStatus !== 'success') {
          setTimeout(() => setSubmissionStatus(""), 5000);
      }
    }
  };


  return (
    <section className="py-10 sm:py-20 md:py-32" id="form-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center md:text-left mb-4 md:mb-6">
              Para aplicar dentro do seu negócio, queremos fazer um diagnóstico 3i atual da sua empresa
            </h2>
            <ul className="text-base sm:text-lg text-slate-300 mb-6 md:mb-8 list-decimal list-inside space-y-2 text-center md:text-left">
              <li>Identificaremos os fatores do comercial que te fazem vender menos</li>
              <li>Identificaremos tudo que pode ser automatizado</li>
              <li>Implementaremos em tempo recorde</li>
            </ul>
            <p className="text-base sm:text-lg text-slate-300 text-center md:text-left">
              Para isso, preencha abaixo e te chamaremos.
            </p>
          </div>

          <motion.div
            className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 md:p-8 rounded-lg shadow-4xl w-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              
              <FormInput 
                id="nome" 
                placeholder="SEU NOME" 
                value={formData.nome}
                onChange={handleChange}
                // isInvalid={formData.nome.trim() === '' && submissionStatus === 'error_validation'} // Adicione esta validação se quiser
              />
              
              <FormInput 
                id="telefone" 
                type="tel" 
                placeholder="TELEFONE (DDD + Número)" 
                value={formData.telefone}
                onChange={handleChange}
                isInvalid={errors.telefone}
              />
              
              {errors.telefone && (
                  <p className="text-red-400 text-sm -mt-2">
                    O telefone deve incluir o DDD e ter 8 ou 9 dígitos (ex: 9xxxx-xxxx).
                  </p>
              )}
              
              <FormInput 
                id="negocio" 
                placeholder="NOME DO SEU NEGÓCIO" 
                value={formData.negocio}
                onChange={handleChange}
                // isInvalid={formData.negocio.trim() === '' && submissionStatus === 'error_validation'} // Adicione esta validação se quiser
              />

              {submissionStatus === 'success' && (
                  <p className="text-green-400 font-semibold text-center">
                      ✅ Recebemos seu contato! Entraremos em contato em breve.
                  </p>
              )}
              {submissionStatus === 'error' && (
                  <p className="text-red-400 font-semibold text-center">
                      ❌ Houve um erro no envio. Por favor, tente novamente.
                  </p>
              )}
              {submissionStatus === 'error_validation' && !errors.telefone && (
                  <p className="text-red-400 font-semibold text-center">
                      Por favor, preencha todos os campos obrigatórios.
                  </p>
              )}


              <Button
                type="submit"
                className="w-full bg-[#FE4634] hover:bg-[#ff2e1b] text-white font-semibold h-12 px-6 rounded-lg transition-colors duration-300 disabled:bg-slate-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Receber mais informações'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FormSection;