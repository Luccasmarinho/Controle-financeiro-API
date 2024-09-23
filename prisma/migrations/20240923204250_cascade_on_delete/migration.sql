-- DropForeignKey
ALTER TABLE "transacoes" DROP CONSTRAINT "transacoes_usuario_id_fkey";

-- AddForeignKey
ALTER TABLE "transacoes" ADD CONSTRAINT "transacoes_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
