"use client";
import { useState } from "react";
import { ContentWrapper } from "@/shared/components/layout";
import { Avatar } from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import { StudentListWrapper } from ".";

const users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
  { id: 4, name: "User 4" },
  { id: 5, name: "User 5" },
];

export function StudentDashboard() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  return (
    <ContentWrapper>
      <StudentListWrapper
        list={users}
        selectedItem={selectedUser}
        setSelectedItem={setSelectedUser}
      />

      {/* Details */}
      <div className="flex-1 min-w-0 overflow-auto p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16" />
            <div>
              <h2 className="text-xl font-semibold">{selectedUser.name}</h2>
              <p className="text-muted-foreground">User #{selectedUser.id}</p>
            </div>
          </div>
          <div className="space-x-2">
            <Button variant="outline">Edit</Button>
            <Button variant="destructive">Delete</Button>
          </div>
        </div>

        <Tabs defaultValue="stats">
          <TabsList>
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="log">Log</TabsTrigger>
          </TabsList>

          <TabsContent value="stats">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="text-sm text-muted-foreground">
                  Radar Chart Placeholder
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Strength</span>
                    <span>4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Intelligence</span>
                    <span>6</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Charisma</span>
                    <span>5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Luck</span>
                    <span>3</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity">
            <Card>
              <CardContent className="p-6 space-y-2">
                <div className="text-sm text-muted-foreground">
                  Activity Log Placeholder
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ContentWrapper>
  );
}
