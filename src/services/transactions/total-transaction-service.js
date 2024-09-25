import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { appError } from "../../errors/app-errors.js"

const serviceTotal = async (userId, queryId) => {
    if (!queryId) {
        appError("Parâmetro necessário ausente.", 400)
    }

    if (userId != queryId) {
        appError("Você não tem permissão para listar esse usuário.", 403)
    } else {
        const consultaTotal = await prisma.transacao.findMany({
            where: {
                usuario_id: Number(queryId)
            }
        });

        const totalEntrada = consultaTotal
            .filter((e) => e.tipo == "entrada")
            .reduce((a, b) => a + Number(b.valor), 0);

        const totalSaida = consultaTotal
            .filter((e) => e.tipo == "saida")
            .reduce((a, b) => a + Number(b.valor), 0);

        const total = {
            total_entrada: totalEntrada.toFixed(2),
            total_saida: totalSaida.toFixed(2),
            saldo: (totalEntrada - totalSaida).toFixed(2)
        }

        return total
    }
}

export default serviceTotal