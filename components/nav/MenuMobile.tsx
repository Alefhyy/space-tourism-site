// import { useState } from "react";
// import Image from "next/image";
// import { Dialog } from "@headlessui/react";
// import Link from "next/link";
// import { INavigationLink } from "@/types";

// interface IMenuMobile {
//     navigationLinks: INavigationLink[];
// }

// const MenuMobile = ({navigationLinks}: IMenuMobile) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const closeModal = () => setIsOpen(false);
//     return (
//         <div className="lg:hidden">
//             <button onClick={() => setIsOpen(true)}>
//                 <Image
//                     src="/ui-icons/bars-icon.svg"
//                     width={32}
//                     height={21}
//                     alt="Abrir menu"
//                     className="w-auto"
//                 />
//             </button>

//             <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
//                 <Dialog.Panel>
//                     <Dialog.Title>Deactivate account</Dialog.Title>
//                     <Dialog.Description>
//                         This will permanently deactivate your account
//                     </Dialog.Description>

//                     <p>
//                         Are you sure you want to deactivate your account? All of your data
//                         will be permanently removed. This action cannot be undone.
//                     </p>

//                     <button onClick={() => setIsOpen(false)}>Deactivate</button>
//                     <button onClick={() => setIsOpen(false)}>Cancel</button>
//                 </Dialog.Panel>
//             </Dialog>
//         </div>
//     );
// }