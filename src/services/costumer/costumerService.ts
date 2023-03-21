import * as costumerRepository from "../../repositories/costumer/costumerRepository"

export async function getAllCostumersByAcademy(instructorId: number) {

    const instructor = await costumerRepository.getInstructorById(instructorId)
    console.log(instructor)

    const costumers = await costumerRepository.getAllCostumersByAcademy(instructor?.academyId)

    return costumers
}
