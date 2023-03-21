import prisma from "../../database/db";

export async function getAllCostumersByAcademy(academyId: any) {

    const costumers = await prisma.client.findMany({
        where: {
            academyId: academyId
        }
    })

    return costumers
}

export async function getInstructorById(instructorId: number) {

    const costumers = await prisma.instructor.findFirst({
        where: {
            id: instructorId
        }
    })

    return costumers
}