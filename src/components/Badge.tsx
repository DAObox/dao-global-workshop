interface Props {
    active: boolean
}

export default function Badge({ active }: Props) {
    return(
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium 
            ${active ? "bg-green-500/40 text-green-700" : "bg-orange-500/40 text-orange-700"}`}>
            { active ? "Active" : "Inactive" }
        </span>
    )
}