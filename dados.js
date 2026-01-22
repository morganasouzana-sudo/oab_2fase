/* BASE DE DADOS - OAB PENAL
   Contém: Exames 44, 43, 42, 41, 40 e 39
   Fonte: Gabaritos Oficiais Definitivos FGV
*/

const OAB_DATA = {
    "pecas": {
        "44exame": [
            { 
                label: "1. Peça de Interposição", 
                hint: "Endereçamento: Juizado Especial Criminal (JECRIM).<br>Fundamento: Art. 82 da Lei 9.099/95 (Apelação)." 
            },
            { 
                label: "2. Tempestividade", 
                hint: "Prazo de 10 dias (Art. 82, §1º da Lei 9.099/95)." 
            },
            { 
                label: "3. Razões", 
                hint: "Endereçamento: Turma Recursal." 
            },
            { 
                label: "4. Preliminar", 
                hint: "Tese: Perempção (Extinção da Punibilidade).<br>Motivo: Querelante não pediu condenação nas alegações finais (Art. 60, III CPP)." 
            },
            { 
                label: "5. Mérito", 
                hint: "Tese: Erro de Tipo Permissivo (Descriminante Putativa).<br>Motivo: Réu achou que o jacaré era real (Art. 20, §1º CP). Absolvição." 
            },
            { 
                label: "6. Subsidiária", 
                hint: "Tese: Afastar Reincidência.<br>Motivo: Crime militar próprio não gera reincidência (Art. 64, II CP)." 
            }
        ],
        "43exame": [
            { 
                label: "1. Peça de Juntada", 
                hint: "Endereçamento: Juizado de Violência Doméstica.<br>Fundamento: Art. 600 do CPP (Contrarrazões de Apelação)." 
            },
            { 
                label: "2. Tempestividade", 
                hint: "Prazo de 3 dias (Art. 600, §1º do CPP)." 
            },
            { 
                label: "3. Razões", 
                hint: "Endereçamento: Tribunal de Justiça." 
            },
            { 
                label: "4. Preliminar 1", 
                hint: "Tese: Ação Pública Incondicionada.<br>Motivo: Lei 9.099 não se aplica à violência doméstica (Súmula 542 STJ)." 
            },
            { 
                label: "5. Preliminar 2", 
                hint: "Tese: Inexistência de Cerceamento de Defesa.<br>Motivo: Perguntas sobre vida sexual da vítima são vedadas (Art. 400-A, I, CPP)." 
            },
            { 
                label: "6. Mérito", 
                hint: "Tese: Manter a condenação.<br>Motivo: Embriaguez voluntária não exclui imputabilidade (Art. 28, II CP)." 
            }
        ],
        "42exame": [
            { 
                label: "1. Peça Processual", 
                hint: "Peça: <strong>Resposta à Acusação</strong>.<br>Endereçamento: Vara Criminal.<br>Fundamento: Art. 396 ou 396-A do CPP." 
            },
            { 
                label: "2. Tempestividade", 
                hint: "Prazo de 10 dias." 
            },
            { 
                label: "3. Preliminar 1 (Nulidade)", 
                hint: "Tese: Ilicitude da Prova (Busca Domiciliar).<br>Motivo: Denúncia anônima sem diligência não autoriza ingresso (Art. 5º, XI CF)." 
            },
            { 
                label: "4. Preliminar 2 (Inépcia)", 
                hint: "Tese: Inépcia da Denúncia.<br>Motivo: Não descreveu o crime antecedente da lavagem de dinheiro (Art. 41 CPP)." 
            },
            { 
                label: "5. Mérito", 
                hint: "Tese: Atipicidade (Absolvição Sumária).<br>Motivo: Guardar dinheiro em casa não é crime se não provada a origem ilícita." 
            }
        ],
        "41exame": [
            { 
                label: "1. Peça de Interposição", 
                hint: "Peça: <strong>Apelação</strong>.<br>Endereçamento: Vara Criminal.<br>Fundamento: Art. 593, I, do CPP." 
            },
            { 
                label: "2. Tempestividade", 
                hint: "Prazo de 5 dias (Art. 593, caput, CPP)." 
            },
            { 
                label: "3. Preliminar 1", 
                hint: "Tese: Nulidade por Cerceamento de Defesa.<br>Motivo: Prazo comum para delator e delatado viola contraditório (Art. 4º, §10-A, Lei 12.850/13)." 
            },
            { 
                label: "4. Preliminar 2", 
                hint: "Tese: Nulidade (Identidade Física do Juiz).<br>Motivo: Sentença proferida por juiz que não presidiu instrução sem motivo justo (Art. 399, §2º CPP)." 
            },
            { 
                label: "5. Mérito", 
                hint: "Tese: Absolvição (Falta de Provas).<br>Motivo: Palavra exclusiva do colaborador não basta para condenar (Art. 4º, §16, Lei 12.850/13)." 
            },
            { 
                label: "6. Subsidiária", 
                hint: "Tese: Afastar efeitos da condenação.<br>Motivo: Não cabe perda de imóvel herdado (lícito) nem cassação de aposentadoria sem processo específico." 
            }
        ],
        "40exame": [
            { 
                label: "1. Peça de Interposição", 
                hint: "Peça: <strong>Apelação</strong>.<br>Endereçamento: Vara Criminal.<br>Fundamento: Art. 593, I, do CPP." 
            },
            { 
                label: "2. Tempestividade", 
                hint: "Prazo de 5 dias (Art. 593, caput, CPP)." 
            },
            { 
                label: "3. Mérito (Fatos 1-7)", 
                hint: "Tese: Atipicidade (Furto de Uso).<br>Motivo: Devolução da coisa intacta e sem ânimo de assenhoreamento definitivo. Pedido: Absolvição (Art. 386, III, CPP)." 
            },
            { 
                label: "4. Mérito (Fato 8)", 
                hint: "Tese: Desclassificação para Furto Simples.<br>Motivo: Porta aberta não configura escalada ou rompimento (Afastar Art. 155, §4º)." 
            },
            { 
                label: "5. Causa de Diminuição", 
                hint: "Tese: Arrependimento Posterior (Art. 16 CP).<br>Motivo: Reparação integral do dano antes do recebimento da denúncia." 
            },
            { 
                label: "6. Subsidiária", 
                hint: "Tese: Continuidade Delitiva (Art. 71 CP).<br>Motivo: Afastar cúmulo material, pois crimes foram nas mesmas condições de tempo/lugar." 
            },
            { 
                label: "7. Pedidos Finais", 
                hint: "Regime Aberto e Substituição por Restritiva de Direitos (Art. 44 CP)." 
            }
        ],
        "39exame": [
            { 
                label: "1. Peça de Interposição", 
                hint: "Peça: <strong>Apelação</strong>.<br>Endereçamento: Juizado de Violência Doméstica.<br>Fundamento: Art. 593, I, do CPP." 
            },
            { 
                label: "2. Tempestividade", 
                hint: "Prazo de 5 dias (Art. 593, caput, CPP)." 
            },
            { 
                label: "3. Razões", 
                hint: "Endereçamento: Tribunal de Justiça." 
            },
            { 
                label: "4. Preliminar (Nulidade)", 
                hint: "Tese: Incompetência Absoluta da Justiça Estadual.<br>Motivo: Crime a bordo de navio em águas internacionais/deslocamento é competência Federal (Art. 109, IX, CF)." 
            },
            { 
                label: "5. Subsidiária (Dosimetria)", 
                hint: "Tese: Pena-base no mínimo (inviável termo médio).<br>Tese: Afastar agravante (bis in idem com causa de aumento)." 
            },
            { 
                label: "6. Subsidiária (Atenuantes)", 
                hint: "Tese: Reconhecer Menoridade Relativa e Confissão Espontânea (Art. 65, I e III, d, CP)." 
            },
            { 
                label: "7. Pedidos Finais", 
                hint: "Regime Aberto (Súmula 718/719 STF) e Afastamento da perda do cargo (Art. 92 CP)." 
            }
        ]
    },

    "flashcards": [
        // --- 44º EXAME ---
        { 
            q: "<strong>[44º Exame]</strong> O falso (doc. médico) se exauriu no estelionato. Qual a tese?", 
            a: "<strong>Consunção</strong> (Súmula 17 STJ). O crime-meio (falso) é absorvido pelo crime-fim (estelionato)." 
        },
        { 
            q: "<strong>[44º Exame]</strong> Ré menor de 18 na ação, vítima morre depois. É imputável?", 
            a: "Não. <strong>Teoria da Atividade</strong> (Art. 4º CP). Considera-se a idade na ação (inimputável)." 
        },
        { 
            q: "<strong>[44º Exame]</strong> Renúncia ao direito de queixa contra um autor beneficia os outros?", 
            a: "Sim. <strong>Princípio da Indivisibilidade</strong> (Art. 49 CPP). Extingue a punibilidade de todos." 
        },

        // --- 43º EXAME ---
        { 
            q: "<strong>[43º Exame]</strong> Acidente planejado mas improvável (coco na cabeça). Há crime?", 
            a: "Não. <strong>Atipicidade</strong> (Falta de Nexo Causal). O resultado não decorreu da conduta (Art. 13 CP)." 
        },
        { 
            q: "<strong>[43º Exame]</strong> Diretor de presídio pode decretar regressão de regime?", 
            a: "Não. Competência exclusiva do <strong>Juiz da Execução</strong> (Art. 48 LEP)." 
        },
        { 
            q: "<strong>[43º Exame]</strong> Quebrar vidro de carro para salvar bebê de insolação é crime?", 
            a: "Não. Excludente de ilicitude: <strong>Estado de Necessidade</strong> (Art. 24 CP)." 
        },

        // --- 42º EXAME ---
        { 
            q: "<strong>[42º Exame]</strong> Atirou em alguém achando que era ameaça (erro justificável). Qual a tese?", 
            a: "<strong>Legítima Defesa Putativa</strong> (Erro de Tipo Permissivo). Isenta de pena (Art. 20, §1º CP)." 
        },
        { 
            q: "<strong>[42º Exame]</strong> Vítima morre por causa independente (ataque de cão) após o tiro. O atirador responde pela morte?", 
            a: "Não. Rompimento do <strong>Nexo Causal</strong> (Art. 13 CP). Responde apenas pelos atos praticados (tentativa/lesão)." 
        },
        { 
            q: "<strong>[42º Exame]</strong> O Ministério Público pode opor Embargos Infringentes?", 
            a: "Não. Recurso exclusivo da <strong>Defesa</strong> (Art. 609, parágrafo único, CPP)." 
        },
        { 
            q: "<strong>[42º Exame]</strong> Falta de vaga em regime semiaberto justifica manter preso no fechado?", 
            a: "Não. <strong>Súmula Vinculante 56</strong>. Deve-se aguardar em regime mais brando ou domiciliar." 
        },

        // --- 41º EXAME ---
        { 
            q: "<strong>[41º Exame]</strong> Cabe Recurso Ordinário Constitucional (ROC) contra decisão que CONCEDE Habeas Corpus?", 
            a: "Não. O ROC só cabe contra decisão <strong>denegatória</strong> (Art. 105, II, a, CF). Se concedeu, o MP não pode usar ROC." 
        },
        { 
            q: "<strong>[41º Exame]</strong> Em recurso exclusivo da defesa, o tribunal pode piorar a situação do réu?", 
            a: "Não. Vedação à <strong>Reformatio in Pejus</strong> (Art. 617 CPP e Súmula 160 STF)." 
        },
        { 
            q: "<strong>[41º Exame]</strong> Furto de itens vencidos/descartados no lixo do mercado. É crime?", 
            a: "Não. <strong>Atipicidade</strong>. Pode ser considerado <em>res derelictae</em> (coisa abandonada) ou Insignificância." 
        },
        { 
            q: "<strong>[41º Exame]</strong> O Juiz pode condenar por crime não descrito na denúncia sem aditamento?", 
            a: "Não. Viola o Princípio da Congruência. Necessário <strong>Mutatio Libelli</strong> (Art. 384 CPP)." 
        },

        // --- 40º EXAME ---
        { 
            q: "<strong>[40º Exame]</strong> Recebimento da denúncia sem recurso próprio. Como impugnar?", 
            a: "<strong>Habeas Corpus</strong> (Art. 648, I, CPP) ou Reclamação ao STF (Art. 103-A, §3º CF)." 
        },
        { 
            q: "<strong>[40º Exame]</strong> Crime tributário material sem lançamento definitivo. Há crime?", 
            a: "Não. <strong>Súmula Vinculante 24</strong>. Falta justa causa (Tipicidade)." 
        },
        { 
            q: "<strong>[40º Exame]</strong> Fiança em crime de descumprimento de medida protetiva (Art. 24-A Lei Maria da Penha). Quem arbitra?", 
            a: "Apenas o <strong>Juiz</strong> (Art. 24-A, §2º da Lei 11.340/06)." 
        },
        { 
            q: "<strong>[40º Exame]</strong> Acusada de tráfico privilegiado primária. Como evitar denúncia?", 
            a: "Pedir remessa ao órgão superior do MP para oferecimento de <strong>ANPP</strong> (Art. 28-A, §14, CPP)." 
        },

        // --- 39º EXAME (NOVO) ---
        { 
            q: "<strong>[39º Exame - Q1]</strong> Ato de terrorismo (bomba) por motivação política. Configura a Lei 13.260?", 
            a: "Não. <strong>Atipicidade</strong>. A lei exclui atos de motivação política/ideológica (Art. 2º, §2º). Pode desclassificar para Explosão." 
        },
        { 
            q: "<strong>[39º Exame - Q1]</strong> Infiltração virtual de agente policial sem ordem judicial. É válida?", 
            a: "Não. Viola a <strong>Reserva de Jurisdição</strong> (Art. 10-A, §4º, Lei 12.850). Prova ilícita." 
        },
        { 
            q: "<strong>[39º Exame - Q2]</strong> Ré inimputável (insanidade mental). Qual o pedido da defesa?", 
            a: "Instaurar <strong>Incidente de Insanidade Mental</strong> (Art. 149 CPP) e pedir absolvição imprópria com Medida de Segurança." 
        },
        { 
            q: "<strong>[39º Exame - Q3]</strong> Pode aumentar a pena do roubo no máximo só pelo número de majorantes?", 
            a: "Não. <strong>Súmula 443 STJ</strong>. Exige fundamentação concreta, não apenas aritmética." 
        },
        { 
            q: "<strong>[39º Exame - Q4]</strong> Vítima de atropelamento morre no hospital por bala perdida. Réu responde pelo homicídio?", 
            a: "Não. Causa superveniente absolutamente independente (Art. 13, §1º CP). Rompe o nexo causal. Responde só pelos atos anteriores (Lesão/Trânsito)." 
        }
    ]
};
