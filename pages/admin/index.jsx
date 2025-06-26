import React, { useEffect } from "react";
import { AdminLayout } from "@/component/admin/AdminLayout";
import { useRouter } from "next/router";
import AdminIndex from "@/component/admin/AdminIndex";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const a = JSON.parse(localStorage.getItem("user"));
    if (a === null) {
      router.push("/admin/login");
    }
  }, []);

  return (
    <div>
       <AdminLayout>
            <AdminIndex></AdminIndex>
       </AdminLayout> 
    </div>
  );
}
