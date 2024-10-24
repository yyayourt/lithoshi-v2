import { useState } from "react";
import AddAlertModal from "../components/Alerts/AddAlertModal";
import Alert from "../components/Alerts/templateAlert";

function Alerts() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alerts, setAlerts] = useState([]);
    const [editingAlertIndex, setEditingAlertIndex] = useState(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingAlertIndex(null);
    };

    const handleCreateOrEditAlert = (alertData) => {
        if (editingAlertIndex !== null) {
            const updatedAlerts = alerts.map((alert, index) => (index === editingAlertIndex ? alertData : alert));
            setAlerts(updatedAlerts);
        } else {
            setAlerts([...alerts, alertData]);
        }
        closeModal();
    };

    const handleEditAlert = (index) => {
        setEditingAlertIndex(index);
        openModal();
    };

    const handleDeleteAlert = (index) => {
        const newAlerts = [...alerts];
        newAlerts.splice(index, 1);
        setAlerts(newAlerts);
    };

    return (
        <>
            {isModalOpen && <AddAlertModal onClose={closeModal} onSaveAlert={handleCreateOrEditAlert} initialData={editingAlertIndex !== null ? alerts[editingAlertIndex] : null} />}
            <div className="flex flex-col mt-3 mb-5 justify-center items-center">
                <div className={`flex flex-col justify-center bg-[#1E1E1F] rounded-2xl w-[92%] h-[150px] mb-4`}>
                    <button onClick={openModal}>
                        <h1 className="text-6xl text-gray-600 text-center">+</h1>
                        <p className="text-gray-600 text-center">Add an alert</p>
                    </button>
                </div>
                {alerts.map((alert, index) => (
                    <Alert key={index} alert={alert} onEdit={() => handleEditAlert(index)} onDelete={() => handleDeleteAlert(index)} />
                ))}
            </div>
        </>
    );
}

export default Alerts;
